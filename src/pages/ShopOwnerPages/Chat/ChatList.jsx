import { useState } from "react";
import { Card, Form, InputGroup, Spinner } from "react-bootstrap";
import { FiMoreVertical, FiSearch } from "react-icons/fi";
import dummyUserPlaceHolder from "../../../Assets/images/user.png";

const ChatList = ({
  conversations,
  selectedConversation,
  onSelectConversation,
  onSearch,
  loading,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <Card className="h-100 rounded-0 border-0 bg-light">
      <Card.Header className="bg-white border-bottom px-4 py-3">
        <InputGroup className="mb-3">
          <InputGroup.Text className="bg-white border-end-0">
            <FiSearch className="text-muted" />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="border-start-0"
            style={{ borderRadius: "8px" }}
          />
        </InputGroup>
        <h5 className="mb-0 fw-bold">Recent Chats</h5>
      </Card.Header>
      <Card.Body
        className="p-0"
        style={{
          overflowY: "auto",
          backgroundColor: "#ffffff",
          maxHeight: "calc(100vh - 240px)",
        }}
      >
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" size="sm" />
          </div>
        ) : conversations.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <p>No conversations found</p>
          </div>
        ) : (
          conversations.map((conversation) => (
            <div
              key={conversation._id}
              className={`conversation-item p-3  border-bottom cursor-pointer ${
                selectedConversation?._id === conversation._id
                  ? "themeBg text-white"
                  : "bg-white"
              }`}
              onClick={() => onSelectConversation(conversation)}
              style={{
                cursor: "pointer",
                backgroundColor:
                  selectedConversation?._id === conversation._id
                    ? "#e3f2fd"
                    : "#f8f9fa",
              }}
            >
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-start flex-grow-1">
                  <div
                    className="rounded-circle text-white d-flex align-items-center justify-content-center me-3 flex-shrink-0 overflow-hidden position-relative"
                    style={{
                      width: "50px",
                      height: "50px",
                      fontSize: "18px",
                      backgroundColor: "#9e9e9e",
                    }}
                  >
                    <img
                      src={conversation.profileImage || dummyUserPlaceHolder}
                      alt={conversation.userName}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.src = dummyUserPlaceHolder;
                      }}
                    />
                  </div>
                  <div className="flex-grow-1" style={{ minWidth: 0 }}>
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <h6
                        className="mb-0 fw-bold text-truncate"
                        style={{ maxWidth: "150px" }}
                      >
                        {conversation.userName}
                      </h6>
                    </div>
                    <p
                      className={`mb-0  small text-truncate ${
                        selectedConversation?._id === conversation._id
                          ? "text-white"
                          : "text-muted"
                      }`}
                      style={{ fontSize: "13px" }}
                    >
                      {conversation.lastMessage}
                    </p>
                    {conversation.unreadCount > 0 && (
                      <span
                        className="badge rounded-pill mt-1"
                        style={{
                          backgroundColor: "#e91e63",
                          color: "white",
                          fontSize: "11px",
                        }}
                      >
                        {conversation.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </Card.Body>
    </Card>
  );
};

export default ChatList;
