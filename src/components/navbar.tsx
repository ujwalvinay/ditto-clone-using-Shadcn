"use client"
import { cn } from "@/lib/utils"
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import DROPDOWN_ITEM_DATA_HEALTH from "./data/healthInsuranceData";
import DROPDOWN_ITEM_DATA_LIFE from "./data/lifeInsuranceData";

const src = `https://joinditto.in/static/2ef89b7a1f6efbff596990cfc23a80e7/33047/logo.webp`;
const hotline = `https://joinditto.in/static/b95c69eb78e2d8af863e507f256239b1/6a2ca/hotline_icon.webp`;

interface DropdownItem {
  title: string;
  href: string;
  icon: string;
}

interface DropdownCategory {
  category: string;
  items: DropdownItem[];
}

interface DropdownMenuItemProps {
  itemText: string;
  dropdownData: DropdownCategory[];
}



 

export default function Navbar() {
  return (
    <main className="flex-row w-full justify-center">
      <NavigationMenu className="mx-5 py-5 px-20 flex-row justify-between">
        <div className="Logo">
        <Image loader={() => src} alt="" src={src} width={100} height={100}/>
        </div>
        <NavigationMenuList>
        <DropdownMenuItem itemText="Health Insurance" dropdownData={DROPDOWN_ITEM_DATA_HEALTH} />
        <DropdownMenuItem itemText="Life Insurance" dropdownData={DROPDOWN_ITEM_DATA_LIFE} />
          <NavigationMenuItem>
            <Link href="/docs" className="text-base" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Claims
              </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/docs" className="text-base" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Careers
              </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Button variant="default" className="text-base">Buy Insurance</Button>
              </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="/docs"  className="" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} >
                <Image className="mr-2" loader={() => hotline} alt="" src={hotline} width={15} height={15}/>
                Hotline
              </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
       </NavigationMenuList>
      </NavigationMenu>

    </main>
  );
}


function DropdownMenuItem({ itemText, dropdownData }: DropdownMenuItemProps) {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-base">{itemText}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {dropdownData.map((category) => (
              <div key={category.category}>
                <h3 className="font-bold mb-2">{category.category}</h3>
                <ul>
                  {category.items.map((item) => (
                    <li key={item.title} className="flex items-center mb-2">
                      <img src={item.icon} alt="" className="mr-2 " width={40} height={30} />
                      <a href={item.href} className="text-base">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
