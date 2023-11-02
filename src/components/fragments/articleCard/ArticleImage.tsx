import { ImageIcon } from "lucide-react";

const ArticleImage = ({ src, alt }: { src?: string; alt: string }) => {
  if (!src) return <ImageIcon size={100} color="gray" />;
  return <img src={src} alt={alt} className="w-52" />;
};

export default ArticleImage;
