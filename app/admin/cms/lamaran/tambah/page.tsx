import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TambahLamaranPage = () => {
    return (
        <div>
            <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              
            </div>
          </div>
        </form>
        </div>
    );
}
export default TambahLamaranPage;