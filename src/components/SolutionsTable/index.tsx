import React, { useState } from "react";
import "./style.css"; // Import your CSS file for styling
import PlusIcon from "../../assets/images/PlusIcon"; // Import the common icon

interface SectionProps {
    id: string;
    title: string;
    content: string;
    isOpen: boolean;
    onToggle: () => void;
}

const SolutionsTable: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (sectionId: string) => {
        setOpenSection((prevOpenSection) =>
            prevOpenSection === sectionId ? null : sectionId
        );
    };

    const sections: SectionProps[] = [
        {
            id: "0",
            title: "Data Entry Processing",
            content:
              "Our solutions ensure accurate and efficient data management, be it collecting or seamless data entry processing.",
            isOpen: openSection === "0",
            onToggle: () => toggleSection("0"),
          },
          {
            id: "1",
            title: "Email Management",
            content:
              "Modernize communication and boost productivity with efficient and innovative email handling.",
            isOpen: openSection === "1",
            onToggle: () => toggleSection("1"),
          },
          {
            id: "2",
            title: "Internal Operations Automation",
            content:
              "Enhance and streamline processes that are often repetitive and resource-intensive, like onboarding, by using intelligent virtual assistance.",
            isOpen: openSection === "2",
            onToggle: () => toggleSection("2"),
          },
          {
            id: "3",
            title: "Company Wiki Search",
            content:
              "Make your company docs useful and convenient like never before. Have instant access and find value in information that was once hidden or disorganized through a dynamic company knowledge base.",
            isOpen: openSection === "3",
            onToggle: () => toggleSection("3"),
          },
          {
            id: "4",
            title: "API Integration",
            content:
              "Enhance connectivity and optimize workflows by integrating diverse applications through tailored API solutions.",
            isOpen: openSection === "4",
            onToggle: () => toggleSection("4"),
          },
    ];

    return (
        <div className="collapsible-sections">
            {sections.map((section) => (
                <Section
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    content={section.content}
                    isOpen={section.isOpen}
                    onToggle={section.onToggle}
                />
            ))}
        </div>
    );
};

const Section: React.FC<SectionProps> = ({ id, title, content, isOpen, onToggle }) => {
    return (
        <div className={`section ${isOpen ? "open" : ""}`}>
            <div className="section-header" onClick={onToggle}>
                <h4>{title}</h4>
                <span className={`icon ${isOpen ? "close" : ""}`} style={{ transform: isOpen ? "rotate(45deg)" : "none" }}>
                    <PlusIcon  />
                </span>
            </div>
            {isOpen && <div className="section-content">{content}</div>}
            <hr className="closing-line"/>
        </div>
    );
};

export default SolutionsTable;
