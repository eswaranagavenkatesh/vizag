// src/pages/BookPackage.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import labBanner from "@/assets/lab-banner.jpg";

const BookPackage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner
        title="Book Your Health Package"
        subtitle="Schedule your health checkup with ease"
        imageSrc={labBanner}
      />

      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Book a Health Package</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-6">
              Fill out the form below to schedule your health package. Our team will contact you to confirm your appointment.
            </p>
            <div className="relative w-full h-[1102px]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfZR5A6W2OQe7rrDgVfXIBI2FS-EzkgKN9Zg84Jo1_mrJ430w/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Health Package Booking Form"
                className="rounded-md"
              >
                Loading…
              </iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookPackage;