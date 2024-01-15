export default function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href")?.substring(1);
  const targetElement = document.getElementById(targetId!);

  if (targetElement) {
    const offset = 0; // Adjust the offset if you have a fixed header, for example
    const targetPosition = targetElement.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};