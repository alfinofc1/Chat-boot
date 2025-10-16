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
        model: "tidy-interface-461003-t6",
      },
      {
        headers: {
          "AIzaSyA-us_KMVI94FhZja9CVnAW5lo0Zo9bFjk": process.env.NEXT_PUBLIC_API_KEY,
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
