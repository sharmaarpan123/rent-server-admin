import { Card, Form, Button, Spinner } from "react-bootstrap";
import moment from "moment";
import { FiSend, FiMoreVertical } from "react-icons/fi";
import { dummyUserPlaceHolder } from "../../../utilities/const";

const ChatHistory = ({
  selectedConversation,
  messages,
  newMessage,
  onMessageChange,
  onSendMessage,
  loading,
}) => {
  // Get avatar initials
  const getAvatarInitials = (name) => {
    return name.charAt(0).toUpperCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage();
  };

  if (!selectedConversation) {
    return (
      <Card
        style={{
          overflowY: "auto",
          backgroundColor: "#ffffff",
          maxHeight: "calc(100vh - 280px)",
          height: "calc(100vh - 280px)",
        }}
        className="h-100 rounded-0 border-0"
      >
        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="text-center text-muted">
            <p>Select a conversation to start chatting</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="h-100 rounded-0 border-0">
      <Card.Header className="bg-white border-bottom px-4 py-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div
              className="rounded-circle text-white d-flex align-items-center justify-content-center me-3"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#9e9e9e",
              }}
            >
              <img
                src={selectedConversation.profileImage || dummyUserPlaceHolder}
                alt={selectedConversation.userName}
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
            <div>
              <h6 className="mb-0 fw-bold">{selectedConversation.userName}</h6>
              <small className="text-muted">
                {selectedConversation.userTitle ||
                  selectedConversation.userEmail}
              </small>
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Body
        className="p-4"
        style={{
          overflowY: "auto",
          backgroundColor: "#ffffff",
          maxHeight: "calc(100vh - 280px)",
          height: "calc(100vh - 280px)",
        }}
      >
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" size="sm" />
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div
                key={message._id}
                className={`d-flex mb-3 align-items-start ${
                  message.isOwn
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                {!message.isOwn && (
                  <div
                    className="rounded-circle text-white d-flex align-items-center justify-content-center me-2 flex-shrink-0"
                    style={{
                      width: "32px",
                      height: "32px",
                      fontSize: "14px",
                      backgroundColor: "#9e9e9e",
                    }}
                  >
                    {getAvatarInitials(message.senderName)}
                  </div>
                )}
                <div
                  className={`message-bubble p-3 rounded ${
                    message.isOwn ? "text-white themeBg" : "bg-light text-dark"
                  }`}
                  style={{
                    maxWidth: "70%",
                    backgroundColor: message.isOwn ? "#e91e63" : "#f5f5f5",
                  }}
                >
                  <p className="mb-1" style={{ margin: 0 }}>
                    {message.message}
                  </p>
                  <small
                    className="d-block mt-1"
                    style={{
                      opacity: 0.7,
                      fontSize: "11px",
                    }}
                  >
                    {moment(message.timestamp).format("hh:mm A")}
                  </small>
                </div>
                {message.isOwn && (
                  <div
                    className="rounded-circle text-white d-flex align-items-center justify-content-center ms-2 flex-shrink-0"
                    style={{
                      width: "32px",
                      height: "32px",
                      fontSize: "14px",
                      backgroundColor: "#9e9e9e",
                    }}
                  >
                    {getAvatarInitials("Shop Owner")}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </Card.Body>
      <Card.Footer className="bg-white border-top px-4 py-3">
        <Form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center gap-2">
            <Form.Control
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => onMessageChange(e.target.value)}
              style={{
                borderRadius: "25px",
                border: "1px solid #e0e0e0",
                padding: "10px 20px",
              }}
            />
            <Button
              type="submit"
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "45px",
                height: "45px",
                backgroundColor: "#e91e63",
                border: "none",
                padding: 0,
              }}
            >
              <FiSend className="text-white" size={18} />
            </Button>
          </div>
        </Form>
      </Card.Footer>
    </Card>
  );
};

export default ChatHistory;
