"use client";
import { useState, useEffect } from "react";

interface Review {
  author: string;
  date: string;
  comment: string;
  rating: number;
}

interface ReviewSectionProps {
  reviews: Review[];
  rating: number;
  productId: string; // Unique productId for each product
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, rating, productId }) => {
  const [reviewList, setReviewList] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);

  // Temporary Logged-in User
  const loggedInUser = "Anonymous";

  // Load reviews from localStorage for the specific productId
  useEffect(() => {
    console.log("Product ID:", productId); // Debugging productId
    const savedReviews = localStorage.getItem(`reviews_${productId}`); // Use the productId in the key
    if (savedReviews) {
      setReviewList(JSON.parse(savedReviews));
    } else {
      setReviewList(reviews || []); // If no saved reviews, use the passed ones
    }
  }, [productId, reviews]); // Only re-run when productId or reviews change

  // Handle Review Submission
  const handleSubmit = () => {
    if (!newReview.trim() || newRating === 0) return;

    const reviewData = {
      author: loggedInUser,
      date: new Date().toLocaleDateString(),
      comment: newReview,
      rating: newRating,
    };

    const updatedReviews = [reviewData, ...reviewList];
    setReviewList(updatedReviews);

    // Save reviews to localStorage for the specific productId
    localStorage.setItem(`reviews_${productId}`, JSON.stringify(updatedReviews));

    setNewReview("");
    setNewRating(0);
  };

  // Handle Delete Review

  return (
    <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-xl">
      {/* Rating Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-900">Rating:</span>
          <div className="flex ml-3 space-x-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill={index < rating ? "url(#goldGradient)" : "#D1D5DB"}
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#FFA500" />
                    <stop offset="100%" stopColor="#FF8C00" />
                  </linearGradient>
                </defs>
                <path d="M12 17.75L6.16 21l1.12-6.52L2 9.26l6.58-.95L12 3l2.42 5.31L21 9.26l-5.28 5.22L17.84 21z" />
              </svg>
            ))}
          </div>
          <span className="ml-3 text-lg text-gray-700">
            ({reviewList.length} Reviews)
          </span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviewList.length > 0 ? (
          reviewList.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex space-x-4 border-l-4 border-yellow-500"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xl font-bold">
                {review.author.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{review.author}</h3>
                <span className="text-sm text-gray-500">{review.date}</span>

                {/* User Rating */}
                <div className="flex mt-1 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill={i < review.rating ? "gold" : "#D1D5DB"}
                    >
                      <path d="M12 17.75L6.16 21l1.12-6.52L2 9.26l6.58-.95L12 3l2.42 5.31L21 9.26l-5.28 5.22L17.84 21z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 mt-2 text-base">{review.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center text-lg">No reviews yet. Be the first to review! ✨</p>
        )}
      </div>

      {/* Add a Review Section */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Add a Review</h3>

        {/* Star Rating Input */}
        <div className="flex space-x-2 mb-3">
          {[...Array(5)].map((_, index) => (
            <button key={index} onClick={() => setNewRating(index + 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill={index < newRating ? "gold" : "#D1D5DB"}
              >
                <path d="M12 17.75L6.16 21l1.12-6.52L2 9.26l6.58-.95L12 3l2.42 5.31L21 9.26l-5.28 5.22L17.84 21z" />
              </svg>
            </button>
          ))}
        </div>

        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
          rows={4}
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="mt-4 bg-yellow-500 text-white py-3 px-8 rounded-lg hover:bg-yellow-600 transition-all text-lg font-semibold"
        >
          Submit Review 🚀
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
