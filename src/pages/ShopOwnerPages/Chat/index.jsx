import { useState } from "react";
import { Col, Container, Row, Card, Form, Button, InputGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { FiSend, FiSearch } from "react-icons/fi";

// Static conversations data
const staticConversations = [
  {
    _id: "1",
    userId: "user1",
    userName: "John Smith",
    userEmail: "john.smith@example.com",
    lastMessage: "Thank you for your help!",
    lastMessageTime: "2024-01-15T14:30:00Z",
    unreadCount: 2,
    avatar: null,
  },
  {
    _id: "2",
    userId: "user2",
    userName: "Sarah Johnson",
    userEmail: "sarah.j@example.com",
    lastMessage: "When can I visit the shop?",
    lastMessageTime: "2024-01-15T12:15:00Z",
    unreadCount: 0,
    avatar: null,
  },
  {
    _id: "3",
    userId: "user3",
    userName: "Mike Wilson",
    userEmail: "mike.wilson@example.com",
    lastMessage: "I'm interested in renting shop #5",
    lastMessageTime: "2024-01-14T16:45:00Z",
    unreadCount: 1,
    avatar: null,
  },
  {
    _id: "4",
    userId: "user4",
    userName: "Emily Brown",
    userEmail: "emily.brown@example.com",
    lastMessage: "The rent payment has been processed",
    lastMessageTime: "2024-01-14T10:20:00Z",
    unreadCount: 0,
    avatar: null,
  },
  {
    _id: "5",
    userId: "user5",
    userName: "David Lee",
    userEmail: "david.lee@example.com",
    lastMessage: "Can we schedule a meeting?",
    lastMessageTime: "2024-01-13T09:30:00Z",
    unreadCount: 0,
    avatar: null,
  },
];

// Static messages data for each conversation
const staticMessages = {
  user1: [
    {
      _id: "msg1",
      senderId: "user1",
      senderName: "John Smith",
      message: "Hello, I have a question about shop availability.",
      timestamp: "2024-01-15T10:00:00Z",
      isOwn: false,
    },
    {
      _id: "msg2",
      senderId: "shopOwner",
      senderName: "Shop Owner",
      message: "Hello! I'd be happy to help. Which shop are you interested in?",
      timestamp: "2024-01-15T10:05:00Z",
      isOwn: true,
    },
    {
      _id: "msg3",
      senderId: "user1",
      senderName: "John Smith",
      message: "I'm looking at shop #3. What's the monthly rent?",
      timestamp: "2024-01-15T10:10:00Z",
      isOwn: false,
    },
    {
      _id: "msg4",
      senderId: "shopOwner",
      senderName: "Shop Owner",
      message: "Shop #3 is $2,500 per month. It's 500 sq ft and includes utilities.",
      timestamp: "2024-01-15T10:15:00Z",
      isOwn: true,
    },
    {
      _id: "msg5",
      senderId: "user1",
      senderName: "John Smith",
      message: "That sounds good. Can I schedule a viewing?",
      timestamp: "2024-01-15T14:25:00Z",
      isOwn: false,
    },
    {
      _id: "msg6",
      senderId: "shopOwner",
      senderName: "Shop Owner",
      message: "Absolutely! I'm available tomorrow afternoon. Does 2 PM work for you?",
      timestamp: "2024-01-15T14:28:00Z",
      isOwn: true,
    },
    {
      _id: "msg7",
      senderId: "user1",
      senderName: "John Smith",
      message: "Thank you for your help!",
      timestamp: "2024-01-15T14:30:00Z",
      isOwn: false,
    },
  ],
  user2: [
    {
      _id: "msg8",
      senderId: "user2",
      senderName: "Sarah Johnson",
      message: "Hi, I'd like to know more about shop #7",
      timestamp: "2024-01-15T11:00:00Z",
      isOwn: false,
    },
    {
      _id: "msg9",
      senderId: "shopOwner",
      senderName: "Shop Owner",
      message: "Shop #7 is currently available. It's 750 sq ft and the rent is $3,200/month.",
      timestamp: "2024-01-15T11:05:00Z",
      isOwn: true,
    },
    {
      _id: "msg10",
      senderId: "user2",
      senderName: "Sarah Johnson",
      message: "When can I visit the shop?",
      timestamp: "2024-01-15T12:15:00Z",
      isOwn: false,
    },
  ],
  user3: [
    {
      _id: "msg11",
      senderId: "user3",
      senderName: "Mike Wilson",
      message: "I'm interested in renting shop #5",
      timestamp: "2024-01-14T16:45:00Z",
      isOwn: false,
    },
  ],
  user4: [
    {
      _id: "msg12",
      senderId: "shopOwner",
      senderName: "Shop Owner",
      message: "The rent payment has been processed successfully.",
      timestamp: "2024-01-14T10:20:00Z",
      isOwn: true,
    },
  ],
  user5: [
    {
      _id: "msg13",
      senderId: "user5",
      senderName: "David Lee",
      message: "Can we schedule a meeting to discuss the lease terms?",
      timestamp: "2024-01-13T09:30:00Z",
      isOwn: false,
    },
  ],
};

const ShopOwnerChat = () => {
  const { t } = useTranslation();
  const [selectedConversation, setSelectedConversation] = useState(staticConversations[0]);
  const [messages, setMessages] = useState(staticMessages[selectedConversation.userId] || []);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredConversations, setFilteredConversations] = useState(staticConversations);

  // Filter conversations based on search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredConversations(staticConversations);
      return;
    }
    const filtered = staticConversations.filter(
      (conv) =>
        conv.userName.toLowerCase().includes(query.toLowerCase()) ||
        conv.userEmail.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredConversations(filtered);
  };

  // Handle conversation selection
  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    setMessages(staticMessages[conversation.userId] || []);
  };

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      _id: `msg${Date.now()}`,
      senderId: "shopOwner",
      senderName: "Shop Owner",
      message: newMessage,
      timestamp: new Date().toISOString(),
      isOwn: true,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");

    // Update conversation's last message
    const updatedConversations = staticConversations.map((conv) => {
      if (conv._id === selectedConversation._id) {
        return {
          ...conv,
          lastMessage: newMessage,
          lastMessageTime: new Date().toISOString(),
        };
      }
      return conv;
    });
    setFilteredConversations(updatedConversations);
  };

  return (
    <section className="shop-owner-chat py-3 position-relative">
      <Container fluid>
        <Row className="g-0" style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}>
          {/* Conversations List */}
          <Col lg={4} className="border-end">
            <Card className="h-100 rounded-0 border-0">
              <Card.Header className="bg-white border-bottom">
                <h5 className="mb-0">Messages</h5>
                <InputGroup className="mt-3">
                  <InputGroup.Text>
                    <FiSearch />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </InputGroup>
              </Card.Header>
              <Card.Body className="p-0" style={{ overflowY: "auto" }}>
                {filteredConversations.length === 0 ? (
                  <div className="text-center py-5 text-muted">
                    <p>No conversations found</p>
                  </div>
                ) : (
                  filteredConversations.map((conversation) => (
                    <div
                      key={conversation._id}
                      className={`conversation-item p-3 border-bottom cursor-pointer ${
                        selectedConversation._id === conversation._id ? "bg-light" : ""
                      }`}
                      onClick={() => handleSelectConversation(conversation)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex align-items-start">
                        <div
                          className="rounded-circle themeBg text-white d-flex align-items-center justify-content-center me-3"
                          style={{ width: "50px", height: "50px", fontSize: "18px" }}
                        >
                          {conversation.userName.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start mb-1">
                            <h6 className="mb-0 fw-bold">{conversation.userName}</h6>
                            <small className="text-muted">
                              {moment(conversation.lastMessageTime).format("MMM DD")}
                            </small>
                          </div>
                          <p className="mb-0 text-muted small text-truncate" style={{ maxWidth: "200px" }}>
                            {conversation.lastMessage}
                          </p>
                          {conversation.unreadCount > 0 && (
                            <span className="badge themeBg rounded-pill mt-1">
                              {conversation.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Chat Messages */}
          <Col lg={8}>
            <Card className="h-100 rounded-0 border-0">
              {selectedConversation ? (
                <>
                  <Card.Header className="bg-white border-bottom">
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle bg-primary themeBg text-white d-flex align-items-center justify-content-center me-3"
                        style={{ width: "40px", height: "40px" }}
                      >
                        {selectedConversation.userName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h6 className="mb-0">{selectedConversation.userName}</h6>
                        <small className="text-muted">{selectedConversation.userEmail}</small>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body
                    className="p-3"
                    style={{ overflowY: "auto", height: "calc(100% - 180px)" }}
                  >
                    {messages.length === 0 ? (
                      <div className="text-center py-5 text-muted">
                        <p>No messages yet. Start the conversation!</p>
                      </div>
                    ) : (
                      messages.map((message) => (
                        <div
                          key={message._id}
                          className={`d-flex mb-3  ${
                            message.isOwn ? "justify-content-end" : "justify-content-start"
                          }`}
                        >
                          <div
                            className={`message-bubble  p-3 rounded ${
                              message.isOwn
                                ? "themeBg text-white"
                                : "bg-light text-dark"
                            }`}
                            style={{ maxWidth: "70%" }}
                          >
                            {!message.isOwn && (
                              <small className=" themeBgd-block mb-1 fw-bold text-muted">
                                {message.senderName}
                              </small>
                            )}
                            <p className="mb-1">{message.message}</p>
                            <small className="opacity-75">
                              {moment(message.timestamp).format("hh:mm A")}
                            </small>
                          </div>
                        </div>
                      ))
                    )}
                  </Card.Body>
                  <Card.Footer className="bg-white border-top">
                    <Form onSubmit={handleSendMessage}>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder="Type a message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <Button variant="primary themeBg" type="submit">
                          <FiSend className="me-1" />
                          Send
                        </Button>
                      </InputGroup>
                    </Form>
                  </Card.Footer>
                </>
              ) : (
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="text-center text-muted">
                    <p>Select a conversation to start chatting</p>
                  </div>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopOwnerChat;

