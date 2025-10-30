// src/pages/Packages.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import labBanner from "@/assets/lab-banner.jpg";

const Packages = () => {
  const packages = [
    {
      name: "Basic Diabetic Health Check",
      actualPrice: "₹2,300",
      effectivePrice: "₹1,399",
      popular: false,
      tests: [
        "Complete Blood Count (CBC)",
        "Fasting Blood Sugar (FBS)",
        "Post Prandial Blood Sugar (PPBS)",
        "Creatinine",
        "Lipid Profile",
        "Complete Urine Examination (CUE)",
        "HbA1c",
        "ECG",
        "Physician Consultation"
      ]
    },
    {
      name: "Advanced Diabetic Health Check",
      actualPrice: "₹3,800",
      effectivePrice: "₹2,299",
      popular: false,
      tests: [
        "All tests from Basic Diabetic Health Check",
        "2D Echo"
      ]
    },
    {
      name: "Complete Diabetic Health Check",
      actualPrice: "₹6,050",
      effectivePrice: "₹4,999",
      popular: true,
      tests: [
        "All tests from Advanced Diabetic Health Check",
        "Thyroid Profile",
        "Liver Function Test (LFT)",
        "High-Sensitivity CRP (HS CRP)",
        "Chest X-Ray",
        "Cardiology Consultation"
      ]
    },
    {
      name: "Basic Cardiac Health Check",
      actualPrice: "₹3,150",
      effectivePrice: "₹1,899",
      popular: false,
      tests: [
        "Complete Blood Count (CBC)",
        "Fasting Blood Sugar (FBS)",
        "Post Prandial Blood Sugar (PPBS)",
        "Creatinine",
        "Lipid Profile",
        "ECG",
        "2D Echo",
        "Cardiology Consultation"
      ]
    },
    {
      name: "Advanced Cardiac Health Check",
      actualPrice: "₹4,650",
      effectivePrice: "₹2,799",
      popular: false,
      tests: [
        "All tests from Basic Cardiac Health Check",
        "Treadmill Test (TMT)"
      ]
    },
    {
      name: "Complete Cardiac Health Check",
      actualPrice: "₹7,850",
      effectivePrice: "₹4,799",
      popular: true,
      tests: [
        "All tests from Advanced Cardiac Health Check",
        "Thyroid Profile",
        "Liver Function Test (LFT)",
        "High-Sensitivity CRP (HS CRP)",
        "Homocysteine",
        "Chest X-Ray"
      ]
    },
    {
      name: "Bone Package",
      actualPrice: "₹2,550",
      effectivePrice: "₹1,599",
      popular: false,
      tests: [
        "Complete Blood Count (CBC)",
        "Erythrocyte Sedimentation Rate (ESR)",
        "Serum Calcium",
        "Vitamin D",
        "Orthopedic Consultation"
      ]
    },
    {
      name: "Joint Package",
      actualPrice: "₹3,450",
      effectivePrice: "₹2,099",
      popular: false,
      tests: [
        "All tests from Bone Package",
        "X-Rays of Both Knee Joints (AP/Lateral Views)"
      ]
    },
    {
      name: "Master Health Check - Non Diabetic Package",
      actualPrice: "₹6,400",
      effectivePrice: "₹4,100",
      popular: false,
      tests: [
        "Complete Blood Count (CBC)",
        "Erythrocyte Sedimentation Rate (ESR)",
        "Fasting Blood Sugar (FBS)",
        "Post Prandial Blood Sugar (PPBS)",
        "Creatinine",
        "Liver Function Test (LFT)",
        "Thyroid Profile",
        "Lipid Profile",
        "Complete Urine Examination (CUE)",
        "Uric Acid",
        "HBsAg",
        "Blood Grouping",
        "ECG",
        "Chest X-Ray",
        "Ultrasound Scan (U/S Scan)",
        "2D Echo",
        "Physician Consultation"
      ]
    },
    {
      name: "Master Health Check - Diabetic Package",
      actualPrice: "₹6,900",
      effectivePrice: "₹4,400",
      popular: false,
      tests: [
        "All tests from Non Diabetic Package",
        "HbA1c"
      ]
    },
    {
      name: "Basic Gynaecology Check",
      actualPrice: "₹4,650",
      effectivePrice: "₹2,799",
      popular: false,
      tests: [
        "Complete Blood Count (CBC)",
        "Random Blood Sugar (RBS)",
        "Creatinine",
        "Thyroid Profile",
        "VDRL",
        "HIV",
        "HBsAg",
        "Pap Smear",
        "Blood Grouping",
        "Complete Urine Examination (CUE)",
        "Ultrasound Scan (U/S Scan)",
        "Gynaecology Consultation"
      ]
    },
    {
      name: "Advanced Gynaecology Check",
      actualPrice: "₹7,300",
      effectivePrice: "₹4,299",
      popular: false,
      tests: [
        "All tests from Basic Gynaecology Check",
        "Vitamin D",
        "Serum Calcium",
        "Vitamin B12"
      ]
    },
    {
      name: "Infertility Package - Female",
      actualPrice: "₹2,780",
      effectivePrice: "₹1,950",
      popular: false,
      tests: [
        "Hemoglobin (HB%)",
        "Random Blood Sugar (RBS)",
        "Thyroid Stimulating Hormone (TSH)",
        "Ultrasound Scan",
        "Prolactin",
        "Semen Analysis",
        "Doctor Consultation"
      ]
    },
    {
      name: "Infertility Package - Male",
      actualPrice: "₹3,500",
      effectivePrice: "₹2,450",
      popular: false,
      tests: [
        "Hemoglobin (HB%)",
        "Random Blood Sugar (RBS)",
        "Testosterone",
        "Semen Analysis",
        "Scrotal Doppler",
        "Doctor Consultation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner 
        title="Health Packages" 
        subtitle="Customized health checkup packages for your wellness"
        imageSrc={labBanner}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={pkg.popular ? "ring-2 ring-primary" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  {pkg.popular && <Badge>Most Popular</Badge>}
                </div>
                <CardDescription className="flex items-center gap-2">
                  <span className="text-lg text-muted-foreground line-through">{pkg.actualPrice}</span>
                  <span className="text-3xl font-bold text-primary">{pkg.effectivePrice}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.tests.map((test, testIndex) => (
                    <li key={testIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{test}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/book-package?package=${encodeURIComponent(pkg.name)}`}>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    Book Package
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-muted/50">
          <CardHeader>
            <CardTitle>Package Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="flex items-center text-sm">
              <Check className="h-4 w-4 text-primary mr-2" />
              Free home sample collection available
            </p>
            <p className="flex items-center text-sm">
              <Check className="h-4 w-4 text-primary mr-2" />
              Reports delivered within 24-48 hours
            </p>
            <p className="flex items-center text-sm">
              <Check className="h-4 w-4 text-primary mr-2" />
              Doctor consultation included in select packages
            </p>
            <p className="flex items-center text-sm">
              <Check className="h-4 w-4 text-primary mr-2" />
              Digital reports accessible online anytime
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Packages;