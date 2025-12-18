import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CHAT_HISTORY, CHAT_LIST } from "../../../services/ApiCalls";
import ChatHistory from "./ChatHistory";
import ChatList from "./ChatList";

const limit = 10;
const ShopOwnerChat = () => {
  const { t } = useTranslation();
  const [conversations, setConversations] = useState([]);
  const [filteredConversations, setFilteredConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);

  // Fetch chat list
  const fetchChatList = async (offset = 0, searchQuery = "") => {
    try {
      setLoading(true);
      const response = await CHAT_LIST({
        offset,
        limit,
        search: searchQuery || "",
      });

      if (response?.data?.success) {
        const chatList = response.data.chatList || [];
        // Map API response to component format
        const mappedConversations = chatList.map((item) => ({
          _id: item.userId,
          userId: item.userId,
          userName: item.userName || t("unknownUser"),
          userTitle: "", // Not provided in API response
          userEmail: "", // Not provided in API response
          lastMessage: item.lastMessage || "",
          lastMessageTime: item.lastMessageTime || new Date().toISOString(),
          unreadCount: item.unreadCount || 0,
          avatar: item.profileImage || null,
        }));

        if (offset === 0) {
          setConversations(mappedConversations);
          setFilteredConversations(mappedConversations);
          // Select first conversation if available
          // if (mappedConversations.length > 0) {
          //   setSelectedConversation(mappedConversations[0]);
          // }
        } else {
          setConversations((prev) => [...prev, ...mappedConversations]);
          setFilteredConversations((prev) => [...prev, ...mappedConversations]);
        }
      }
    } catch (error) {
      console.error("Error fetching chat list:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch chat history
  const fetchChatHistory = async (userId, offset = 0) => {
    if (!userId) return;

    try {
      setLoadingMessages(true);
      const response = await CHAT_HISTORY({
        userId,
        offset,
        limit,
      });

      if (response?.data?.success) {
        const chatHistory = response.data.chatHistory || [];
        // Map API response to component format
        const mappedMessages = chatHistory.map((item) => ({
          _id: item.messageId || item._id,
          senderId: item.sender?._id || "",
          senderName: item.sender?.userName || t("unknown"),
          message: item.message || "",
          timestamp: item.createdAt || new Date().toISOString(),
          isOwn: item.selfMessage || false,
        }));

        if (offset === 0) {
          setMessages(mappedMessages);
        } else {
          setMessages((prev) => [...mappedMessages, ...prev]);
        }
      }
    } catch (error) {
      console.error("Error fetching chat history:", error);
    } finally {
      setLoadingMessages(false);
    }
  };

  // Load chat list on component mount
  useEffect(() => {
    fetchChatList(0);
  }, []);

  // Load chat history when conversation is selected
  useEffect(() => {
    if (selectedConversation?.userId) {
      fetchChatHistory(selectedConversation.userId, 0);
    }
  }, [selectedConversation]);

  // Filter conversations based on search
  const handleSearch = (query) => {
    fetchChatList(0, query);
  };

  // Handle conversation selection
  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    setMessages([]);
  };

  // Handle sending a new message
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      _id: `msg${Date.now()}`,
      senderId: "shopOwner",
      senderName: t("shopOwner"),
      message: newMessage,
      timestamp: new Date().toISOString(),
      isOwn: true,
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");

    // Update conversation's last message
    const updatedConversations = conversations.map((conv) => {
      if (conv._id === selectedConversation._id) {
        return {
          ...conv,
          lastMessage: newMessage,
          lastMessageTime: new Date().toISOString(),
        };
      }
      return conv;
    });
    setConversations(updatedConversations);
    setFilteredConversations(updatedConversations);
  };

  return (
    <section className="shop-owner-chat py-3 position-relative">
      <Container fluid>
        <Row className="g-0">
          {/* Conversations List */}
          <Col
            lg={4}
            className=" bg-light   p-4"
            
          >
            <ChatList
              conversations={filteredConversations}
              selectedConversation={selectedConversation}
              onSelectConversation={handleSelectConversation}
              onSearch={handleSearch}
              loading={loading}
            />
          </Col>

          {/* Chat Messages */}
          <Col lg={8} className=" bg-light p-4 rounded">
            <ChatHistory
              selectedConversation={selectedConversation}
              messages={messages}
              newMessage={newMessage}
              onMessageChange={setNewMessage}
              onSendMessage={handleSendMessage}
              loading={loadingMessages}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopOwnerChat;
