import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const WishlistButton = () => {
  return (
    <div>
      <Button variant="ghost">
        <Heart className="w-4 h-4" />{" "}
        <span className="text-sm">Wishlist</span>{" "}
        <Badge variant="ghost">
          <span className="text-xs">4</span>
        </Badge>
      </Button>
    </div>
  );
};

export default WishlistButton;
