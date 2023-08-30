import { CSVLink } from "react-csv";
import SecureLS from "secure-ls";

const getUser = () => {
    const ls = new SecureLS({ encodingType: "aes" });
    const user = ls.get("user");
    return user.username;
}

const ExportMessages = () => {
    return (
        <div>
            <p>Good Bye {getUser()}</p>
            <p>Here is a link with a history of our conversation: </p>
            <CSVLink
                filename={"chat_history.csv"}
                data={
                    [
                        ["Not", "Implemented", "Yet"],
                    ]
                }
            >
                Download
            </CSVLink>
        </div>
    );
};

export default ExportMessages;
