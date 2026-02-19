// ReviewsListMain.tsx (SERVER)
import { getReviews } from "@/app/action/ReviewAction";
import { ReviewApi } from "./review.types";
import ReviewsDescription from "./ReviewsDescription";


const ReviewsListMain = async () => {
  const reviews: ReviewApi[] = await getReviews();
  return <ReviewsDescription reviews={reviews} />;
};

export default ReviewsListMain;
