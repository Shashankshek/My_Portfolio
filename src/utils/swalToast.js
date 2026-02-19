import Swal from "sweetalert2";

export const showSuccessToast = (message = "Success!") => {
  // play success sound
  const audio = new Audio("/success.mp3");
  audio.volume = 0.5;
  audio.play().catch(() => {}); // prevents autoplay errors

  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 3500, // ⬅ increased time so user can read
    timerProgressBar: true,

    // theme matching
    background: "hsl(var(--background))",
    color: "hsl(var(--foreground))",
    iconColor: "hsl(var(--primary))",

    customClass: {
      popup: "rounded-lg border border-border shadow-lg",
    },
  });
};
