const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_body:
      "Lorem ipsum dolor, sit amet consectetur adipi2350723598623948724082302",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_body:
      "Lorem ipsum dolor, sit amet consectetur adipisicim!oiahsdg;ozhxcv;hzsdfliahsdfjkbvlkzjxcnvl;kzjx",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    post_body:
      "hLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.l",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    post_body:
      "hLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    post_body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro. Expedita perferendis, accusamus sunt error saepe doloremque ut in voluptas sequi facere, earum reiciendis non eaque illum placeat quaerat laborum.",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
