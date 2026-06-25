"use client";

import { createReview } from "@/services/review.service";
import { useState } from "react";

export default function ReviewForm({
  menuItemId,
}: {
  menuItemId: string;
}) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
  console.log("Submit clicked");

  try {
    const result = await createReview(
      menuItemId,
      rating,
      comment
    );

    console.log("Review Response:", result);
  } catch (error) {
    console.error("Review Error:", error);
  }
};

  return (
    <div className="space-y-2">
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) =>
          setRating(Number(e.target.value))
        }
      />

      <textarea
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
        placeholder="Write your review..."
      />

      <button className="bg-lime-300 text-black font-semibold px-4 py-2 rounded-2xl" onClick={handleSubmit}>
        Submit Review
      </button>
    </div>
  );
}




// "use client";

// import { createReview } from "@/services/review.service";
// import { useState } from "react";

// export default function ReviewForm({
//   menuItemId,
// }: {
//   menuItemId: string;
// }) {
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");

//   const handleSubmit = async () => {
//     await createReview(
//       menuItemId,
//       rating,
//       comment
//     );
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         min="1"
//         max="5"
//         value={rating}
//         onChange={(e) =>
//           setRating(Number(e.target.value))
//         }
//       />

//       <textarea
//         value={comment}
//         onChange={(e) =>
//           setComment(e.target.value)
//         }
//       />

//       <button onClick={handleSubmit}>
//         Submit Review
//       </button>
//     </div>
//   );
// }

// export default function ReviewForm({
//   menuItemId,
// }: {
//   menuItemId: string;
// }) {
//   return (
//     <div className="bg-yellow-300 p-4">
//       <h1>Review Form Loaded</h1>
//       <p>{menuItemId}</p>
//     </div>
//   );
// }