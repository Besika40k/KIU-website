import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ExpressionOfInterest() {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Expression of Interest</h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          If you are interested to work with us you can see our vacancies or
          contact us at:{" "}
          <Link
            href="mailto:admin@kiu.edu.ge"
            className="text-blue-600 hover:underline"
          >
            admin@kiu.edu.ge
          </Link>
        </p>

        <p>
          We are seeking expressions of interest (EoI) from the future academic
          personnel and teaching assistants to be involved in the teaching and
          research activities at Kutaisi International University (KIU). For
          detailed information and to fill out an expression of interest form,
          please{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            read the guidelines here
          </Link>
          .
        </p>

        <Card className="bg-blue-50 border-blue-100 p-6 mt-6">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Ready to Apply?
          </h3>
          <p className="text-sm mb-4 text-foreground">
            Submit your expression of interest and join our academic community.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Submit Expression of Interest
          </Button>
        </Card>
      </div>
    </Card>
  );
}
