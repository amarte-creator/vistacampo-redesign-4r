"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Copy, Check, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react"

interface ShareButtonsProps {
  title: string
  url: string
  description?: string
  language: 'es' | 'en'
}

export function ShareButtons({ title, url, description, language }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const shareText = language === 'es' 
    ? `Mira este artículo: ${title}`
    : `Check out this article: ${title}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(facebookUrl, '_blank', 'width=600,height=400')
  }

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, '_blank', 'width=600,height=400')
  }

  const shareOnLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedinUrl, '_blank', 'width=600,height=400')
  }

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`
    window.open(whatsappUrl, '_blank')
  }

  const shareViaNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description || shareText,
          url
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      copyToClipboard()
    }
  }

  const shareOptions = [
    {
      name: language === 'es' ? 'Copiar enlace' : 'Copy link',
      icon: copied ? Check : Copy,
      action: copyToClipboard,
      color: 'bg-gray-100 hover:bg-gray-200'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      action: shareOnFacebook,
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      action: shareOnTwitter,
      color: 'bg-sky-100 hover:bg-sky-200 text-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      action: shareOnLinkedIn,
      color: 'bg-blue-100 hover:bg-blue-200 text-blue-700'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: shareOnWhatsApp,
      color: 'bg-green-100 hover:bg-green-200 text-green-600'
    }
  ]

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Share2 className="h-4 w-4" />
        <span>{language === 'es' ? 'Compartir' : 'Share'}</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50 min-w-[200px]">
          <div className="space-y-1">
            {shareOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  option.action()
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${option.color}`}
              >
                <option.icon className="h-4 w-4" />
                <span>{option.name}</span>
              </button>
            ))}
            
            {navigator.share && (
              <button
                onClick={() => {
                  shareViaNative()
                  setIsOpen(false)
                }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm bg-emerald-100 hover:bg-emerald-200 text-emerald-600 transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span>{language === 'es' ? 'Compartir' : 'Share'}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
