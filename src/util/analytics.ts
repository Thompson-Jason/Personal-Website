// Simple privacy-friendly analytics utility
// This doesn't collect personal data, just basic usage patterns

interface AnalyticsEvent {
  event: string;
  page?: string;
  timestamp: number;
}

class SimpleAnalytics {
  private events: AnalyticsEvent[] = [];
  private maxEvents = 100; // Keep only last 100 events

  track(event: string, page?: string) {
    if (typeof window === "undefined") return; // Server-side check

    const analyticsEvent: AnalyticsEvent = {
      event,
      page: page || window.location.pathname,
      timestamp: Date.now(),
    };

    this.events.push(analyticsEvent);

    // Keep only the most recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    // Store in localStorage for persistence
    try {
      localStorage.setItem("site_analytics", JSON.stringify(this.events));
    } catch (error) {
      console.warn("Unable to store analytics data:", error);
    }
  }

  getEvents(): AnalyticsEvent[] {
    try {
      const stored = localStorage.getItem("site_analytics");
      if (stored) {
        this.events = JSON.parse(stored);
      }
    } catch (error) {
      console.warn("Unable to retrieve analytics data:", error);
    }
    return this.events;
  }

  // Track page views
  trackPageView(page?: string) {
    this.track("page_view", page);
  }

  // Track button clicks
  trackButtonClick(buttonName: string) {
    this.track("button_click", buttonName);
  }

  // Track form submissions
  trackFormSubmission(formName: string) {
    this.track("form_submission", formName);
  }
}

export const analytics = new SimpleAnalytics();
