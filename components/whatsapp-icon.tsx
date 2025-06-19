import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

interface WhatsAppIconProps {
  className?: string
  color?: string
}

export function WhatsAppIcon({ className = "h-5 w-5", color = "#fff" }: WhatsAppIconProps) {
  return (
    <FontAwesomeIcon 
      icon={faWhatsapp} 
      className={className}
      style={{ color }}
    />
  )
} 