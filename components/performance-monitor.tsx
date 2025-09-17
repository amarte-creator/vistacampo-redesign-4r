"use client";

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor First Input Delay (FID)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any; // Type assertion for FID entry
            const fid = fidEntry.processingStart - fidEntry.startTime;
            console.log('First Input Delay:', fid);
            
            // Send to analytics if needed
            if (fid > 100) {
              console.warn('High FID detected:', fid);
            }
          }
        }
      });

      observer.observe({ entryTypes: ['first-input'] });

      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('Largest Contentful Paint:', lastEntry.startTime);
      });

      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as any; // Type assertion for CLS entry
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        }
        console.log('Cumulative Layout Shift:', clsValue);
      });

      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        observer.disconnect();
        lcpObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null;
}
