document.addEventListener("submit", (event) => {
  const form = event.target;
  if (!form.matches("[data-mock-form]")) return;
  event.preventDefault();
  const notice = form.querySelector(".notice");
  if (notice) {
    const isChinese = document.documentElement.lang.toLowerCase().startsWith("zh");
    notice.textContent = isChinese
      ? "表单已在前端模拟提交。之后接入后台时会保留这些字段。"
      : "Form submitted in the front-end mockup. These fields can be wired to the backend later.";
    notice.classList.add("is-visible");
  }
  form.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
