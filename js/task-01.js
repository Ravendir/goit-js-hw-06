const liItem = document.querySelectorAll("li.item");
console.log("Number of categories:", liItem.length);
liItem.forEach((liItem) => {
  const hRef = liItem.querySelector("h2").textContent;
  const liRef = liItem.querySelectorAll("li").length;
  console.log(`Category:${hRef}`);
  console.log(`Elements:${liRef}`);
});
