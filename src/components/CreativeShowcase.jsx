import React, { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./ui/tabs";
import {
  PenTool,
  BarChart3,
  Video,
  Megaphone,
  Image as ImageIcon,
  Play,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { creativeWork } from "../mock";

const iconMap = {
  PenTool,
  BarChart3,
  Video,
  Megaphone,
  Image: ImageIcon,
};

export default function CreativeShowcase() {
  const [active, setActive] = useState(creativeWork[0].id);
  const current = creativeWork.find((c) => c.id === active);

  return (
    <div className="rounded-3xl border border-border bg-card overflow-hidden">
      <Tabs value={active} onValueChange={setActive} className="w-full">
        {/* Top bar with tabs */}
        <div className="border-b border-border bg-muted/40 px-4 md:px-6 py-3 overflow-x-auto">
          <TabsList className="bg-transparent p-0 h-auto gap-1 flex-nowrap">
            {creativeWork.map((cat) => {
              const Icon = iconMap[cat.icon] || PenTool;
              return (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none rounded-full px-3.5 py-1.5 text-[13px] gap-1.5 whitespace-nowrap"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {/* Panels */}
        {creativeWork.map((cat) => (
          <TabsContent
            key={cat.id}
            value={cat.id}
            className="p-5 md:p-7 mt-0 focus-visible:outline-none"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div className="max-w-xl">
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  {cat.count}
                </div>
                <h3 className="font-display font-bold text-xl text-foreground leading-tight">
                  {cat.label}
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {cat.blurb}
                </p>
              </div>
              <a
                href={cat.galleryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[hsl(var(--accent-600))] font-medium hover:gap-2 transition-all"
              >
                View gallery
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.items.map((item, idx) => (
                <a
                  key={idx}
                  href={cat.galleryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative rounded-2xl overflow-hidden border border-border bg-background"
                  aria-label={`View ${cat.label} gallery on Behance`}
                >
                  <figure>
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                      />
                    </div>
                    {cat.id === "motion" && (
                      <span className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full bg-background/90 backdrop-blur border border-border shadow-sm">
                        <Play className="h-4 w-4 text-foreground fill-foreground" />
                      </span>
                    )}
                    <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <div className="text-white font-medium text-sm leading-tight">
                            {item.title}
                          </div>
                          <div className="text-white/70 text-[11px] mt-0.5">
                            {item.meta}
                          </div>
                        </div>
                        <Badge className="rounded-full bg-white/95 text-neutral-950 hover:bg-white text-[10px]">
                          {cat.label}
                        </Badge>
                      </div>
                    </figcaption>
                  </figure>
                </a>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
