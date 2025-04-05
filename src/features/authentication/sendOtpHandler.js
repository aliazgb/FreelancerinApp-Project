import toast from "react-hot-toast";

export const sendOtpHandler = async (
  data,
  mutateAsync,
  setOtp,
  setStep,
  setTesterPhoneNumber
) => {
  const { phoneNumber } = data;

  let normalized = phoneNumber;
  if (normalized.startsWith("+98")) normalized = normalized.replace("+98", "0");
  else if (normalized.startsWith("+49"))
    normalized = normalized.replace("+49", "0");

  const phoneRegex = /^(0|(\+98|\+49))[1-9][0-9]{9,10}$/;
  const allowedPrefixes = ["09", "01", "045"];
  const startsWithAllowed = allowedPrefixes.some((prefix) =>
    normalized.startsWith(prefix)
  );

  if (!phoneRegex.test(phoneNumber) || !startsWithAllowed) {
    toast.error("The phone number is invalid.");
    return;
  }

  try {
    const { message, otp, phoneNumber } = await mutateAsync(data);
    setOtp(otp.toString());
    setStep(2);
    setTesterPhoneNumber(phoneNumber.toString());
    toast.success(message);
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
