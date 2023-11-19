const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    image_png: "/images/avatars/image-juliusomo.png",
    image_webp: "/images/avatars/image-juliusomo.webp",
    username: "juliusomo",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    image_png: "/images/avatars/image-amyrobson.png",
    image_webp: "/images/avatars/image-amyrobson.webp",
    username: "amyrobson",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    image_png: "/images/avatars/image-maxblagun.png",
    image_webp: "/images/avatars/image-maxblagun.webp",
    username: "maxblagun",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    image_png: "/images/avatars/image-ramsesmiron.png",
    image_webp: "/images/avatars/image-ramsesmiron.webp",
    username: "ramsesmiron",
  },
];

const comments = [
  {
    id: 1,
    userId: users[1].id,
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "1 month ago",
    score: 12,
    isReply: false,
    replyCommentIds: [],
  },
  {
    id: 2,
    userId: users[2].id,
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    createdAt: "2 weeks ago",
    score: 5,
    isReply: false,
    replyCommentIds: [3, 4],
  },
  {
    id: 3,
    userId: users[3].id,
    content:
      "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
    createdAt: "1 week ago",
    score: 4,
    isReply: true,
    replyCommentIds: [],
  },
  {
    id: 4,
    userId: users[2].id,
    content:
      "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    createdAt: "2 days ago",
    score: 2,
    isReply: true,
    replyCommentIds: [],
  },
];

module.exports = {
  users,
  comments,
};

// {
//   "currentUser": {
//     "image": {
//       "png": "/images/avatars/image-juliusomo.png",
//       "webp": "/images/avatars/image-juliusomo.webp"
//     },
//     "username": "juliusomo"
//   },
//   "comments": [
//     {
//       "id": 1,
//       "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
//       "createdAt": "1 month ago",
//       "score": 12,
//       "isReply": false,
//       "user": {
//         "image": {
//           "png": "/images/avatars/image-amyrobson.png",
//           "webp": "/images/avatars/image-amyrobson.webp"
//         },
//         "username": "amyrobson"
//       },
//       "replies": []
//     },
//     {
//       "id": 2,
//       "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
//       "createdAt": "2 weeks ago",
//       "score": 5,
//       "isReply": false,
//       "user": {
//         "image": {
//           "png": "/images/avatars/image-maxblagun.png",
//           "webp": "/images/avatars/image-maxblagun.webp"
//         },
//         "username": "maxblagun"
//       },
//       "replies": [
//         { "id": 3, "replyingTo": "maxblagun" },
//         { "id": 4, "replyingTo": "ramsesmiron" }
//       ]
//     },
//     {
//       "id": 3,
//       "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
//       "createdAt": "1 week ago",
//       "score": 4,
//       "isReply": true,
//       "user": {
//         "image": {
//           "png": "/images/avatars/image-ramsesmiron.png",
//           "webp": "/images/avatars/image-ramsesmiron.webp"
//         },
//         "username": "ramsesmiron"
//       },
//       "replies": []
//     },
//     {
//       "id": 4,
//       "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
//       "createdAt": "2 days ago",
//       "score": 2,
//       "isReply": true,
//       "user": {
//         "image": {
//           "png": "/images/avatars/image-juliusomo.png",
//           "webp": "/images/avatars/image-juliusomo.webp"
//         },
//         "username": "juliusomo"
//       },
//       "replies": []
//     }
//   ]
// }
