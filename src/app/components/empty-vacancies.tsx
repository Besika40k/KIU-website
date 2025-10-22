import { Card } from "@/components/ui/card";
import { Ban } from "lucide-react";

export function EmptyVacancies() {
  return (
    <Card className="p-12">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
          <Ban className="w-8 h-8 text-muted-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">No Current Vacancies</h3>
          <p className="text-muted-foreground">
            There are currently no open positions. Please check back later or
            submit an expression of interest above.
          </p>
        </div>
      </div>
    </Card>
  );
}
