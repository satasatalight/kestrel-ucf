import Image, { StaticImageData } from "next/image";
import Link from "next/link"
import{
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    GitHubLogoIcon, 
    LinkedInLogoIcon, 
    Link2Icon, 
    FileTextIcon
} from "@radix-ui/react-icons";

export interface MemberCardProps{
    name: string;
    role: string;
    description: string;
    image: StaticImageData;
    links: Array<LinkProps>;
}

interface LinkProps{
    type: string;
    href: string;
}

const MemberCard = ({name, description, role, image, links} : MemberCardProps) => {
    return <Card className="flex justify-between text-left overflow-hidden">
        <CardContent className="pb-0 flex flex-col justify-between">
            <CardHeader className="pb-3 pt-4">
                <CardTitle className="text-3xl">
                    {name}
                </CardTitle>
                <CardDescription className="text-1xl pb-2">
                    {role}
                </CardDescription>
                <p className="mb-2">
                    {description}
                </p>
            </CardHeader>
            
            <CardFooter className="border-gray-500 border-t w-100 mx-6 px-0 pt-2">
                {links.map((link) => 
                    <Link className="text-blue-500 decoration-blue-500 underline pe-2" key={link.href} href={link.href} title={link.type}>
                        <IconSwitch type={link.type} className="w-7 h-auto" alt={link.type}/>
                    </Link>
                )}
            </CardFooter>
        </CardContent>

        <Image className="max-w-4/10 rounded-l-4xl" src={image} alt={name}/>
    </Card>
}

const IconSwitch = (props : {type: string, className: string, alt: string}) => {
    switch(props.type){
        case "github":
            return <GitHubLogoIcon {...props}/>
        
        case "linkedin":
            return <LinkedInLogoIcon {...props}/>

        case "cover_letter":
        case "cv":
        case "resume":
            return <FileTextIcon {...props}/>
        
        // misc links
        default:
            return <Link2Icon {...props}/>
    }
}

export default MemberCard;