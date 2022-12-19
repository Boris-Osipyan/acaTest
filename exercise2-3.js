let users = [
  {
    name: "show_only_active",
    value: "true",
  },
  {
    name: "max_items_to_show",
    value: 10,
  },
  {
    name: "show_description",
    value: false,
  },
];

const max = document.getElementById("max");
const remove = document.getElementById("remove");

max.addEventListener("click", () => {
  console.log(users);
});
