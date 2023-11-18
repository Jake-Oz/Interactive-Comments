// export type userDataSchema = {
//   currentUser: {
//     image: { png: string; webp: string };
//     username: string;
//   };
//   comments: {
//     id: number;
//     content: string;
//     createdAt: string;
//     score: number;
//     isReply: boolean;
//     user: {
//       image: {
//         png: string;
//         webp: string;
//       };
//       username: string;
//     };
//     replies: {
//       id: number;
//       content: string;
//       createdAt: string;
//       score: number;
//       replyingTo: string;
//       user: {
//         image: {
//           png: string;
//           webp: string;
//         };
//         username: string;
//       };
//     }[];
//   }[];
// };

export type user = {
  id: string;
  image_png: string;
  image_webp: string;
  username: string;
};

export type comment = {
  id: number;
  userId: string;
  content: string;
  createdAt: string;
  score: number;
  isReply: boolean;
  replyCommentIds: number[];
};
