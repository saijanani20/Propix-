import Image from "next/image";
import { MapPin, Bed, Bath, Square, Heart, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PropertyProps {
  image: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  size: number;
  type: string;
  aiScore?: number;
  verified?: boolean;
  virtualTour?: boolean;
}

export function PropertyCard({
  image,
  price,
  title,
  location,
  beds,
  baths,
  size,
  type,
  aiScore,
  verified,
  virtualTour
}: PropertyProps) {
  return (
    <Card className="group overflow-hidden rounded-[20px] border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Placeholder image usage */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Badge className="bg-primary hover:bg-primary/90 text-white shadow-sm backdrop-blur-md">
            {type}
          </Badge>
          {verified && (
            <Badge className="bg-success hover:bg-success/90 text-white shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Verified
            </Badge>
          )}
        </div>
        
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          <Button variant="secondary" size="icon" className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-slate-700">
            <Heart className="w-4 h-4" />
          </Button>
          {virtualTour && (
            <Badge variant="secondary" className="bg-white/80 backdrop-blur-md text-xs font-semibold text-slate-800 border-none shadow-sm mt-2">
              3D Tour
            </Badge>
          )}
        </div>

        {/* AI Match Score floating badge */}
        {aiScore && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-md">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-[10px] font-bold text-white">
              AI
            </div>
            <span className="text-sm font-semibold text-slate-800">{aiScore}% Match</span>
          </div>
        )}
      </div>

      <CardContent className="p-5">
        <h3 className="text-2xl font-bold text-primary mb-2 font-heading">{price}</h3>
        <h4 className="text-lg font-semibold text-foreground mb-1 line-clamp-1">{title}</h4>
        <div className="flex items-center text-muted-foreground text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-slate-600">
            <Bed className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Bath className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Square className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium">{size} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
