export interface GAReport {
  sessions: number;
  conversions: number;
  events: number;
}

export const analyticsService = {
  async getReport(): Promise<GAReport> {
    const propertyId = process.env.REACT_APP_GA4_PROPERTY_ID;
    const apiKey = process.env.REACT_APP_GA_API_KEY;
    if (!propertyId || !apiKey) {
      console.warn('Google Analytics configuration missing. Returning sample data.');
      return { sessions: 0, conversions: 0, events: 0 };
    }
    try {
      const response = await fetch(
        `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            metrics: [
              { name: 'sessions' },
              { name: 'conversions' },
              { name: 'eventCount' }
            ],
            dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }]
          })
        }
      );
      const data = await response.json();
      const values = data.rows?.[0]?.metricValues || [];
      return {
        sessions: Number(values[0]?.value || 0),
        conversions: Number(values[1]?.value || 0),
        events: Number(values[2]?.value || 0)
      };
    } catch (error) {
      console.error('Error fetching analytics data', error);
      return { sessions: 0, conversions: 0, events: 0 };
    }
  }
};
