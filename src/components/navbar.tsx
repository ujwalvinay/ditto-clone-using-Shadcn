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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
const src = `https://joinditto.in/static/2ef89b7a1f6efbff596990cfc23a80e7/33047/logo.webp`;
const hotline = `https://joinditto.in/static/b95c69eb78e2d8af863e507f256239b1/6a2ca/hotline_icon.webp`;

 
export default function Navbar() {
  return (
    <main className="flex-row w-full justify-center">
      <NavigationMenu className="mx-5 py-5 px-20 flex-row justify-between">
        <div className="Logo">
        <Image loader={() => src} alt="" src={src} width={100} height={100}/>
        </div>
        <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[450px] gap-6 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
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
