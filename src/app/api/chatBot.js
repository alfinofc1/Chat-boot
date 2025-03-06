import axios from "axios";
import { toast } from "react-toastify";

export const aiResponse = async (messages) => {

  try {
    const res = await axios.post(
        process.env.NEXT_PUBLIC_API_URL,
      {
        messages: [
          messages
        ],
        model: "EchoGPT",
      },
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      }
    );
    return res.data;
  } catch (error) {
    toast.error(`${error.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
};
