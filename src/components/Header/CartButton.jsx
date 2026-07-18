import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const CartButton = () => {
  return (
    <div>
      <Button variant="ghost">
        <ShoppingCart className="w-4 h-4" />{" "}
        <span className="text-sm">Cart</span>
        <Badge variant="ghost">
          <span className="text-xs">4</span>
        </Badge>
      </Button>
    </div>
  );
};

export default CartButton;
