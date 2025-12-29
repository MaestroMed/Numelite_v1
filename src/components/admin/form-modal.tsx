"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FormModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children: React.ReactNode
  onSubmit: () => void
  submitLabel?: string
  isLoading?: boolean
  size?: "sm" | "md" | "lg" | "xl"
}

export function FormModal({
  isOpen,
  onClose,
  title,
  description,
  children,
  onSubmit,
  submitLabel = "Enregistrer",
  isLoading = false,
  size = "md",
}: FormModalProps) {
  if (!isOpen) return null

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full ${sizeClasses[size]} bg-[#1a1f2e] border border-white/10 rounded-xl shadow-2xl`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div>
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            {description && (
              <p className="text-sm text-[#8899aa] mt-0.5">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-[#8899aa]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">{children}</div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-white/10">
          <Button
            variant="ghost"
            onClick={onClose}
            disabled={isLoading}
            className="text-[#8899aa] hover:text-white hover:bg-white/10"
          >
            Annuler
          </Button>
          <Button onClick={onSubmit} disabled={isLoading}>
            {isLoading ? "Chargement..." : submitLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}

