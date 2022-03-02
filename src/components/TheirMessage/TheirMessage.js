
const TheirMessage = ({ message, lastMessage }) => {

    const isFirstMessageByuser = !lastMessage || lastMessage.sender.username !== message.sender.username;


    return (
        <div className='message-row'>
            {
                isFirstMessageByuser && (
                    <div className='message-avatar'

                    /* message.sender && `url(${message.sender.avatar})` `url(${message?.sender?.avatar})`*/

                        style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}

                    />
                )
            }
            { message.attachments && message.attachments.length > 0
            ?   (
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        classname="message-image"
                        style={{ marginLeft: isFirstMessageByuser ? "4px" : "48px" }}
                    />
                ) : (
                    <div className='message' style={{ float: "left", backgroundColor: "#CABCDC", marginLeft: isFirstMessageByuser ? "4px" : "48px" }}>
                        {message.text}
                    </div>
                )

            }
        </div>
    );
};

export default TheirMessage;
