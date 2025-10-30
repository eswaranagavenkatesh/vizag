import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Pill, TestTube } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import PageBanner from "@/components/PageBanner";

const BookAppointment = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const bookingOptions = [
    {
      icon: Stethoscope,
      title: "Book Health Package",
      description: "Choose from our comprehensive health checkup packages tailored for your wellness needs.",
      actionText: "Explore Packages",
      path: "/book-package",
    },
    {
      icon: Pill,
      title: "Order Medicine",
      description: "Get 100% genuine medicines delivered to your doorstep with our 24/7 pharmacy services.",
      actionText: "Order Now",
      path: "/pharmacy",
    },
    {
      icon: TestTube,
      title: "Book a Lab Test",
      description: "Schedule diagnostic tests at our NABL-accredited lab for accurate and timely results.",
      actionText: "Book Test",
      path: "/book-lab-test",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner 
        title="Book Your Healthcare Services" 
        subtitle="Access our range of medical services with ease and convenience"
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Booking Options Section */}
        <section className="py-12 bg-muted/30 rounded-2xl shadow-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in">
              Your Healthcare, Your Way
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              From consultations to diagnostics and medications, explore our comprehensive services designed for your well-being.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bookingOptions.map((option, index) => (
                <Card
                  key={index}
                  className="text-center hover-lift medical-card transition-all duration-300 hover:shadow-xl"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 animate-pulse">
                      <option.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm mb-4">
                      {option.description}
                    </CardDescription>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-white"
                      onClick={() => handleNavigation(option.path)}
                    >
                      {option.actionText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Form Section */}
        <section className="py-12">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Book Your Doctor Appointment</CardTitle>
                <CardDescription>
                  Please fill in your details to schedule a consultation with our doctors
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Google Form Embedded */}
                <div className="space-y-6">
                  <div 
                    className="w-full max-w-full mx-auto bg-muted iframe-container" 
                    style={{ 
                      borderRadius: 'var(--radius)',
                      overflow: 'hidden',
                    }}
                  >
                    <iframe 
                      src="https://docs.google.com/forms/d/e/1FAIpQLSd_j4L6xstkE8HGqPEkUURbtI4eDzE-paxfO7OFrFaTqpW20Q/viewform?embedded=true" 
                      style={{ 
                        width: '100%', 
                        height: '100vh', // Use viewport height for dynamic scaling
                        minHeight: '600px', // Minimum height for smaller screens
                        maxHeight: '1200px', // Maximum height to prevent excessive growth
                        border: 0,
                      }}
                      frameBorder="0" 
                      marginHeight={0} 
                      marginWidth={0}
                      title="Appointment Booking Form"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Location Section */}
        <div className="mt-8">
          <GoogleMap />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookAppointment;