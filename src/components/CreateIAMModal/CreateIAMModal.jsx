import styled, { css } from "styled-components";
const Button = styled.button`
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid black;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    ${(props) => {
        switch (props.variant) {
            case "secondary":
                return css`
                    background-color: white;
                    color: black;
                    &:hover {
                        background-color: black;
                        color: white;
                    }
                `;
            default:
                return css`
                    background-color: black;
                    color: white;
                    &:hover {
                        background-color: white;
                        color: black;
                    }
                `;
        }
    }}
`;

const CreateIAMModal = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 animate-fadeIn">
        <div className="bg-white rounded-2xl p-6 shadow-lg w-96">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Create IAM</h2>

            <div className="space-y-2 mb-2">
                <select className="border rounded-md p-2 w-full">
                    <option value='role'>Role</option>
                    <option value='user'>User</option>
                </select>
                <input
                    type="text"
                    placeholder="Enter IAM Name"
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div className="flex justify-end space-x-2">
                <Button variant='secondary'>Cancel</Button>
                <Button>Create</Button>
            </div>
        </div>
    </div>
);

export default CreateIAMModal;
