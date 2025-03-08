import {
  Stethoscope,
  TestTube2,
  ScanFace,
  Syringe,
  Heart,
  BookOpen,
  type LucideIcon
} from "lucide-react"

export const medicalIcons: Record<string, LucideIcon> = {
  exam: Stethoscope,
  blood: TestTube2,
  imaging: ScanFace,
  treatment: Syringe,
  care: Heart,
  terms: BookOpen,
}
