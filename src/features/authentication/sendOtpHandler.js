import toast from "react-hot-toast";

export const sendOtpHandler = async (data, mutateAsync, setOtp, setStep,setTesterPhoneNumber) => {
  try {
    const { message, otp, phoneNumber } = await mutateAsync(data);
    setOtp(otp.toString());
    setStep(2);
    toast.success(message);
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
