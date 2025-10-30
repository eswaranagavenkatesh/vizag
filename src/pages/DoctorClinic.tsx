import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, IndianRupee, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import doctorsBanner from "@/assets/doctors-banner.jpg";
import { Link } from "react-router-dom";
import localDoctors from "@/data/doctors.json";

const DoctorClinic = () => {
  const [doctors, setDoctors] = useState<any[]>([]);

  useEffect(() => {
    // Load JSON dynamically (use local file when not deployed)
    fetch("/src/data/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data.doctors))
      .catch(() => setDoctors(localDoctors.doctors));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner
        title="Doctor Clinic"
        subtitle="Expert medical consultations across multiple specializations"
        imageSrc={doctorsBanner}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Link to="/book-appointment">
            <Button size="lg">View All Doctors & Book Appointment</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-muted">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                <Badge className="absolute top-4 right-4">{doctor.specialty}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{doctor.qualification}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>{doctor.experience}</span>
                </div>
                <div className="flex items-center text-sm">
                  <IndianRupee className="h-4 w-4 mr-2 text-primary" />
                  <span>Consultation: ₹{doctor.fee}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span>{doctor.timing}</span>
                </div>
                <Link to="/book-appointment">
                  <Button className="w-full mt-4">Book Appointment</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorClinic;
