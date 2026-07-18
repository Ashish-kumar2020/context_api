import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LayoutGrid } from "lucide-react";

const NavigationMenu = () => {
  return (
    <Select defaultValue="All Categories">
      <SelectTrigger className="w-45 text-sm">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-4 h-4" />
          <SelectValue placeholder="All Categories" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all" className="text-sm">
          All Categories
        </SelectItem>
        <SelectItem value="electronics" className="text-sm">
          Electronics
        </SelectItem>
        <SelectItem value="clothing" className="text-sm">
          Clothing
        </SelectItem>
        <SelectItem value="home" className="text-sm">
          Home & Living
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default NavigationMenu;
