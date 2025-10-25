import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import PageBanner from "@/components/PageBanner";

const BookAppointment = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner 
        title="Book Your Doctor Appointment" 
        subtitle="Schedule a consultation with our healthcare professionals"
      />
      
      <div className="container mx-auto px-4 py-12">
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
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeVBFGlu0O-vN7Yso6WWdjJG3s6Yss4rajX_-Re2sqAL8Ixow/viewform?embedded=true" width="640" height="884" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </div>
            </CardContent>
          </Card>

          {/* Location Section */}
          <div className="mt-8">
            <GoogleMap />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookAppointment;