"use client";

import { Platform } from "@/data/projects";

type ImageProp = string | { web?: string; mobile?: string } | undefined;

interface DeviceMockupProps {
  platform: Platform;
  color: string;
  image?: ImageProp;
  importance?: 1 | 2 | 3 | "ACT";
}


function PhoneMockup({
  color,
  image,
  importance = 1,
}: {
  color: string;
  image?: ImageProp;
  importance?: 1 | 2 | 3 | "ACT";
}) {
  const scale =
    importance === "ACT"
      ? 1.6
      : importance === 3
        ? 1.25
        : importance === 2
          ? 1.05
          : 0.92;
  const borderSize = importance === "ACT" ? 3 : importance === 3 ? 4 : 5;
  return (
    <div
      style={{
        width: 76 * 2 * scale,
        height: 136 * 2 * scale,
        borderWidth: borderSize,
        borderStyle: "solid",
        maxWidth: "100%",
      }}
      className="relative rounded-[13px] border-ink/80 shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_10px_24px_rgba(0,0,0,0.24),inset_0_2px_6px_rgba(255,255,255,0.15)] bg-ink flex flex-col items-center shrink-0"
    >
      <div className="w-14 h-[6px] bg-ink rounded-b-full mt-[4px] z-10" />
      <div
        className="flex-1 w-full rounded-b-[11px] overflow-hidden"
        style={{ background: color }}
      >
        {image && (
          
          <img
            src={
              typeof image === "string" ? image : (image.mobile ?? image.web)
            }
            alt=""
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

function BrowserMockup({
  color,
  image,
  small,
  importance = 1,
}: {
  color: string;
  image?: ImageProp;
  small?: boolean;
  importance?: 1 | 2 | 3 | "ACT";
}) {
  const scale =
    importance === "ACT"
      ? 1.45
      : importance === 3
        ? 1.45
        : importance === 2
          ? 1.0
          : 0.86;
  const borderSize = importance === "ACT" ? 3 : importance === 3 ? 4 : 5;
  const w = small ? 100 * 2 * scale : 136 * 2.5 * scale;
  const h = small ? 76 * 2 * scale : 65 * 2.5 * scale;
  return (
    <div
      style={{
        width: w,
        height: h,
        borderWidth: borderSize,
        borderStyle: "solid",
        maxWidth: "100%",
      }}
      className="relative rounded-[8px] border-ink/80 shadow-[0_0_0_1px_rgba(0,0,0,0.16),0_8px_18px_rgba(0,0,0,0.2),inset_0_2px_6px_rgba(255,255,255,0.14)] bg-ink/5 flex flex-col shrink-0 overflow-hidden"
    >
      <div className="bg-ink/10 px-2 py-[4px] flex items-center gap-1.5 border-b border-ink/10 shrink-0">
        <div className="flex gap-[4px]">
          <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#FFBD2E]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#28CA41]" />
        </div>
        <div className="flex-1 h-[6px] rounded-sm bg-ink/10 mx-1" />
      </div>
      <div className="flex-1 overflow-hidden" style={{ background: color }}>
        {image && (
          
          <img
            src={
              typeof image === "string" ? image : (image.web ?? image.mobile)
            }
            alt=""
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

function DesktopMockup({
  color,
  image,
  importance = 1,
}: {
  color: string;
  image?: ImageProp;
  importance?: 1 | 2 | 3 | "ACT";
}) {
  const scale =
    importance === "ACT"
      ? 1.55
      : importance === 3
        ? 1.2
        : importance === 2
          ? 1.0
          : 0.9;
  const borderSize = importance === "ACT" ? 4 : importance === 3 ? 5 : 6;
  return (
    <div className="flex flex-col items-center shrink-0">
      <div
        style={{
          width: 180 * 2 * scale,
          height: 96 * 2 * scale,
          borderWidth: borderSize,
          borderStyle: "solid",
          maxWidth: "100%",
        }}
        className="rounded-[7px] border-ink/80 shadow-[0_0_0_1px_rgba(0,0,0,0.16),0_10px_22px_rgba(0,0,0,0.2),inset_0_2px_6px_rgba(255,255,255,0.12)] bg-ink/5 flex flex-col overflow-hidden"
      >
        <div className="flex-1 overflow-hidden" style={{ background: color }}>
          {image && (
            
            <img
              src={
                typeof image === "string" ? image : (image.web ?? image.mobile)
              }
              alt=""
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      <div className="w-[28px] h-[11px] bg-ink/15 rounded-b-sm" />
      <div className="w-[52px] h-[4px] bg-ink/10 rounded-full" />
    </div>
  );
}

export function DeviceMockup({
  platform,
  color,
  image,
  importance,
}: DeviceMockupProps) {
  if (platform === "mobile")
    return <PhoneMockup color={color} image={image} importance={importance} />;
  if (platform === "web")
    return (
      <BrowserMockup color={color} image={image} importance={importance} />
    );
  if (platform === "desktop")
    return (
      <DesktopMockup color={color} image={image} importance={importance} />
    );
  if (platform === "web+mobile") {
    return (
      <div className="flex items-end gap-3">
        <BrowserMockup
          color={color}
          image={image}
          small
          importance={importance}
        />
        <PhoneMockup color={color} image={image} importance={importance} />
      </div>
    );
  }
  return null;
}
