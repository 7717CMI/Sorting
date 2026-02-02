'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerName: string
  businessType: string
  primaryFoodProductType: string
  facilityType: string
  installedSortingCapacity: string
  numberOfSortingLines: number
  // Contact Details
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Procurement & Purchase Metrics (for Proposition 2)
  annualSortingMachineProcurement: string
  preferredProcurementModel: string
  averageProcurementLeadTime: string
  replacementCycleOfMachines: string
  // Digital & Technology Adoption Metrics (for Proposition 3)
  levelOfAutomation: string
  percentageOfLinesWithPLC: string
  useOfAIorVisionBasedSorting: string
  predictiveMaintenanceTools: string
  remoteMonitoringCapability: string
  // Future Demand & Expansion Metrics (for Proposition 3)
  plannedCapacityExpansion: string
  expectedNewSortingMachinePurchases: string
  newProductIntroductionPlanned: string
  newFacilityConstructionPlanned: string
  // CMI Insights (for Proposition 3)
  customerBenchmarking: string
  additionalComments: string
}

// Sample data - Food Sorting Machine Customers
const sampleCustomerData: CustomerData[] = [
  {
    customerName: 'ABC Fresh Produce Ltd',
    businessType: 'Food Processor',
    primaryFoodProductType: 'Fruits & Vegetables',
    facilityType: 'Processing Plant',
    installedSortingCapacity: '10 tons/hour',
    numberOfSortingLines: 3,
    keyContactPerson: 'John Smith',
    designation: 'Operations Manager',
    emailAddress: 'j.smith@abcfresh.com',
    phoneNumber: '+1 555 0100',
    linkedInProfile: 'linkedin.com/in/johnsmith',
    websiteUrl: 'www.abcfresh.com',
    annualSortingMachineProcurement: '$500,000',
    preferredProcurementModel: 'Distributor',
    averageProcurementLeadTime: '8 weeks',
    replacementCycleOfMachines: '5 years',
    levelOfAutomation: 'Semi-Automatic',
    percentageOfLinesWithPLC: '67%',
    useOfAIorVisionBasedSorting: 'Yes',
    predictiveMaintenanceTools: 'Medium',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '25%',
    expectedNewSortingMachinePurchases: '2 machines',
    newProductIntroductionPlanned: 'Fresh produce',
    newFacilityConstructionPlanned: 'Yes',
    customerBenchmarking: 'High potential customer',
    additionalComments: 'Expanding operations'
  },
  {
    customerName: 'Global Grains Co',
    businessType: 'Agribusiness Operator',
    primaryFoodProductType: 'Grains & Pulses',
    facilityType: 'Sorting Center',
    installedSortingCapacity: '15 tons/hour',
    numberOfSortingLines: 5,
    keyContactPerson: 'Sarah Johnson',
    designation: 'Plant Director',
    emailAddress: 's.johnson@globalgrains.com',
    phoneNumber: '+1 555 0200',
    linkedInProfile: 'linkedin.com/in/sarahjohnson',
    websiteUrl: 'www.globalgrains.com',
    annualSortingMachineProcurement: '$750,000',
    preferredProcurementModel: 'In-House',
    averageProcurementLeadTime: '12 weeks',
    replacementCycleOfMachines: '7 years',
    levelOfAutomation: 'Automatic',
    percentageOfLinesWithPLC: '80%',
    useOfAIorVisionBasedSorting: 'Yes',
    predictiveMaintenanceTools: 'High',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '30%',
    expectedNewSortingMachinePurchases: '3 machines',
    newProductIntroductionPlanned: 'Grains',
    newFacilityConstructionPlanned: 'No',
    customerBenchmarking: 'Strategic customer',
    additionalComments: 'Long-term partnership'
  },
  {
    customerName: 'Premium Nuts Ltd',
    businessType: 'Food Processor',
    primaryFoodProductType: 'Nuts & Dates',
    facilityType: 'Processing Plant',
    installedSortingCapacity: '5 tons/hour',
    numberOfSortingLines: 2,
    keyContactPerson: 'Michael Chen',
    designation: 'Operations Head',
    emailAddress: 'm.chen@premiumnuts.com',
    phoneNumber: '+1 555 0300',
    linkedInProfile: 'linkedin.com/in/michaelchen',
    websiteUrl: 'www.premiumnuts.com',
    annualSortingMachineProcurement: '$300,000',
    preferredProcurementModel: 'System',
    averageProcurementLeadTime: '6 weeks',
    replacementCycleOfMachines: '4 years',
    levelOfAutomation: 'Semi-Automatic',
    percentageOfLinesWithPLC: '50%',
    useOfAIorVisionBasedSorting: 'No',
    predictiveMaintenanceTools: 'Low',
    remoteMonitoringCapability: 'No',
    plannedCapacityExpansion: '15%',
    expectedNewSortingMachinePurchases: '1 machine',
    newProductIntroductionPlanned: 'Nuts',
    newFacilityConstructionPlanned: 'Yes',
    customerBenchmarking: 'Medium potential',
    additionalComments: 'Quality focused'
  },
  {
    customerName: 'Fresh Valley Packagers',
    businessType: 'Packager',
    primaryFoodProductType: 'Fruits & Vegetables',
    facilityType: 'Packaging Center',
    installedSortingCapacity: '8 tons/hour',
    numberOfSortingLines: 3,
    keyContactPerson: 'Emily Davis',
    designation: 'Facility Manager',
    emailAddress: 'e.davis@freshvalley.com',
    phoneNumber: '+1 555 0400',
    linkedInProfile: 'linkedin.com/in/emilydavis',
    websiteUrl: 'www.freshvalley.com',
    annualSortingMachineProcurement: '$450,000',
    preferredProcurementModel: 'Distributor',
    averageProcurementLeadTime: '10 weeks',
    replacementCycleOfMachines: '6 years',
    levelOfAutomation: 'Fully Automatic',
    percentageOfLinesWithPLC: '100%',
    useOfAIorVisionBasedSorting: 'Yes',
    predictiveMaintenanceTools: 'High',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '40%',
    expectedNewSortingMachinePurchases: '4 machines',
    newProductIntroductionPlanned: 'Fresh produce',
    newFacilityConstructionPlanned: 'Yes',
    customerBenchmarking: 'High growth customer',
    additionalComments: 'Innovation leader'
  },
  {
    customerName: 'AgriTech Distribution',
    businessType: 'Distributor',
    primaryFoodProductType: 'Grains & Pulses',
    facilityType: 'Distribution Center',
    installedSortingCapacity: '20 tons/hour',
    numberOfSortingLines: 6,
    keyContactPerson: 'Robert Wilson',
    designation: 'VP Operations',
    emailAddress: 'r.wilson@agritech.com',
    phoneNumber: '+1 555 0500',
    linkedInProfile: 'linkedin.com/in/robertwilson',
    websiteUrl: 'www.agritech.com',
    annualSortingMachineProcurement: '$1,000,000',
    preferredProcurementModel: 'In-House',
    averageProcurementLeadTime: '14 weeks',
    replacementCycleOfMachines: '8 years',
    levelOfAutomation: 'Automatic',
    percentageOfLinesWithPLC: '85%',
    useOfAIorVisionBasedSorting: 'Yes',
    predictiveMaintenanceTools: 'High',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '20%',
    expectedNewSortingMachinePurchases: '2 machines',
    newProductIntroductionPlanned: 'Grains',
    newFacilityConstructionPlanned: 'No',
    customerBenchmarking: 'Key account',
    additionalComments: 'Regional leader'
  },
  {
    customerName: 'OrganicHarvest Co',
    businessType: 'Food Processor',
    primaryFoodProductType: 'Fruits & Vegetables',
    facilityType: 'Processing Plant',
    installedSortingCapacity: '12 tons/hour',
    numberOfSortingLines: 4,
    keyContactPerson: 'Lisa Martinez',
    designation: 'Plant Manager',
    emailAddress: 'l.martinez@organicharvest.com',
    phoneNumber: '+1 555 0600',
    linkedInProfile: 'linkedin.com/in/lisamartinez',
    websiteUrl: 'www.organicharvest.com',
    annualSortingMachineProcurement: '$600,000',
    preferredProcurementModel: 'System',
    averageProcurementLeadTime: '9 weeks',
    replacementCycleOfMachines: '5 years',
    levelOfAutomation: 'Semi-Automatic',
    percentageOfLinesWithPLC: '75%',
    useOfAIorVisionBasedSorting: 'Yes',
    predictiveMaintenanceTools: 'Medium',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '35%',
    expectedNewSortingMachinePurchases: '3 machines',
    newProductIntroductionPlanned: 'Fresh produce',
    newFacilityConstructionPlanned: 'Yes',
    customerBenchmarking: 'Sustainable leader',
    additionalComments: 'Organic certified'
  },
  {
    customerName: 'Global Food Solutions',
    businessType: 'Agribusiness Operator',
    primaryFoodProductType: 'Nuts & Dates',
    facilityType: 'Sorting Center',
    installedSortingCapacity: '18 tons/hour',
    numberOfSortingLines: 5,
    keyContactPerson: 'David Brown',
    designation: 'Operations Director',
    emailAddress: 'd.brown@globalfood.com',
    phoneNumber: '+1 555 0700',
    linkedInProfile: 'linkedin.com/in/davidbrown',
    websiteUrl: 'www.globalfood.com',
    annualSortingMachineProcurement: '$850,000',
    preferredProcurementModel: 'Distributor',
    averageProcurementLeadTime: '11 weeks',
    replacementCycleOfMachines: '6 years',
    levelOfAutomation: 'Fully Automatic',
    percentageOfLinesWithPLC: '90%',
    useOfAIorVisionBasedSorting: 'Yes',
    predictiveMaintenanceTools: 'High',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '50%',
    expectedNewSortingMachinePurchases: '5 machines',
    newProductIntroductionPlanned: 'Nuts',
    newFacilityConstructionPlanned: 'Yes',
    customerBenchmarking: 'Strategic partner',
    additionalComments: 'Multi-facility operator'
  },
  {
    customerName: 'Quality Grains Inc',
    businessType: 'Packager',
    primaryFoodProductType: 'Grains & Pulses',
    facilityType: 'Packaging Center',
    installedSortingCapacity: '14 tons/hour',
    numberOfSortingLines: 4,
    keyContactPerson: 'Jennifer Lee',
    designation: 'Quality Manager',
    emailAddress: 'j.lee@qualitygrains.com',
    phoneNumber: '+1 555 0800',
    linkedInProfile: 'linkedin.com/in/jenniferlee',
    websiteUrl: 'www.qualitygrains.com',
    annualSortingMachineProcurement: '$550,000',
    preferredProcurementModel: 'In-House',
    averageProcurementLeadTime: '7 weeks',
    replacementCycleOfMachines: '5 years',
    levelOfAutomation: 'Automatic',
    percentageOfLinesWithPLC: '100%',
    useOfAIorVisionBasedSorting: 'Yes',
    predictiveMaintenanceTools: 'Medium',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '28%',
    expectedNewSortingMachinePurchases: '3 machines',
    newProductIntroductionPlanned: 'Grains',
    newFacilityConstructionPlanned: 'No',
    customerBenchmarking: 'Quality leader',
    additionalComments: 'Premium segment'
  },
  {
    customerName: 'Fresh Produce Network',
    businessType: 'Distributor',
    primaryFoodProductType: 'Fruits & Vegetables',
    facilityType: 'Distribution Center',
    installedSortingCapacity: '25 tons/hour',
    numberOfSortingLines: 7,
    keyContactPerson: 'Thomas Anderson',
    designation: 'CEO',
    emailAddress: 't.anderson@freshproduce.com',
    phoneNumber: '+1 555 0900',
    linkedInProfile: 'linkedin.com/in/thomasanderson',
    websiteUrl: 'www.freshproduce.com',
    annualSortingMachineProcurement: '$1,200,000',
    preferredProcurementModel: 'System',
    averageProcurementLeadTime: '15 weeks',
    replacementCycleOfMachines: '7 years',
    levelOfAutomation: 'Fully Automatic',
    percentageOfLinesWithPLC: '95%',
    useOfAIorVisionBasedSorting: 'Yes',
    predictiveMaintenanceTools: 'High',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '45%',
    expectedNewSortingMachinePurchases: '6 machines',
    newProductIntroductionPlanned: 'Fresh produce',
    newFacilityConstructionPlanned: 'Yes',
    customerBenchmarking: 'Top tier customer',
    additionalComments: 'National coverage'
  },
  {
    customerName: 'Premium Date Processors',
    businessType: 'Food Processor',
    primaryFoodProductType: 'Nuts & Dates',
    facilityType: 'Processing Plant',
    installedSortingCapacity: '7 tons/hour',
    numberOfSortingLines: 2,
    keyContactPerson: 'Maria Garcia',
    designation: 'Production Manager',
    emailAddress: 'm.garcia@premiumdates.com',
    phoneNumber: '+1 555 1000',
    linkedInProfile: 'linkedin.com/in/mariagarcia',
    websiteUrl: 'www.premiumdates.com',
    annualSortingMachineProcurement: '$400,000',
    preferredProcurementModel: 'Distributor',
    averageProcurementLeadTime: '8 weeks',
    replacementCycleOfMachines: '4 years',
    levelOfAutomation: 'Manual',
    percentageOfLinesWithPLC: '30%',
    useOfAIorVisionBasedSorting: 'No',
    predictiveMaintenanceTools: 'Low',
    remoteMonitoringCapability: 'No',
    plannedCapacityExpansion: '18%',
    expectedNewSortingMachinePurchases: '1 machine',
    newProductIntroductionPlanned: 'No',
    newFacilityConstructionPlanned: 'No',
    customerBenchmarking: 'Niche player',
    additionalComments: 'Specialty products'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Common Customer Information header cells (6 columns)
  const renderCustomerInfoHeaders = () => (
    <>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
        <div>Customer/Company Name</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Type of Business</div>
        <div className="font-normal text-[10px] text-gray-600">(Food Processor, Agribusiness Operator, Packager, Distributor)</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Primary Food Product Type</div>
        <div className="font-normal text-[10px] text-gray-600">(Fruits & Vegetables, Grains & Pulses, Nuts & Dates, Nuts & Dates)</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Facility Type</div>
        <div className="font-normal text-[10px] text-gray-600">(Processing Plant, Sorting Center, Packaging Center, Distribution Center, Packaging Center)</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
        <div>Installed Sorting Capacity</div>
        <div className="font-normal text-[10px] text-gray-600">(Tons per Hour)</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[120px]">
        <div>Number of Sorting Lines</div>
      </th>
    </>
  )

  // Common Contact Details header cells (6 columns)
  const renderContactHeaders = () => (
    <>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
    </>
  )

  // Common Customer Information data cells (6 columns)
  const renderCustomerInfoCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessType}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryFoodProductType}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.facilityType}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.installedSortingCapacity}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.numberOfSortingLines}</td>
    </>
  )

  // Common Contact Details data cells (6 columns)
  const renderContactCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
      </td>
    </>
  )

  // Procurement & Purchase Metrics header cells (4 columns)
  const renderProcurementHeaders = () => (
    <>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Annual Sorting Machine Procurement</div>
        <div className="font-normal text-[10px] text-gray-600">(USD$)</div>
      </th>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Preferred Procurement Model</div>
        <div className="font-normal text-[10px] text-gray-600">(In-House, Distributor, System)</div>
      </th>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Average Procurement Lead Time</div>
        <div className="font-normal text-[10px] text-gray-600">(Weeks)</div>
      </th>
      <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Replacement Cycle of Machines</div>
        <div className="font-normal text-[10px] text-gray-600">(Years)</div>
      </th>
    </>
  )

  // Procurement & Purchase Metrics data cells
  const renderProcurementCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.annualSortingMachineProcurement}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredProcurementModel}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.averageProcurementLeadTime}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.replacementCycleOfMachines}</td>
    </>
  )

  // Digital & Technology Adoption Metrics header cells (5 columns)
  const renderDigitalTechHeaders = () => (
    <>
      <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Level of Automation</div>
        <div className="font-normal text-[10px] text-gray-600">(Manual, Semi-Automatic, Automatic, Fully)</div>
      </th>
      <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Percentage of Lines with PLC or SCADA</div>
        <div className="font-normal text-[10px] text-gray-600">Systems (Yes/No, %)</div>
      </th>
      <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Use of AI or Vision Based Sorting</div>
        <div className="font-normal text-[10px] text-gray-600">Systems (Yes/No)</div>
      </th>
      <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Predictive Maintenance Tools and Adoption</div>
        <div className="font-normal text-[10px] text-gray-600">(Low, Medium, High)</div>
      </th>
      <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Remote Monitoring and Diagnostics Capability</div>
        <div className="font-normal text-[10px] text-gray-600">(Yes or No)</div>
      </th>
    </>
  )

  // Digital & Technology Adoption Metrics data cells
  const renderDigitalTechCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.levelOfAutomation}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.percentageOfLinesWithPLC}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.useOfAIorVisionBasedSorting}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.predictiveMaintenanceTools}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.remoteMonitoringCapability}</td>
    </>
  )

  // Future Demand & Expansion Metrics header cells (4 columns)
  const renderFutureExpansionHeaders = () => (
    <>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
        <div>Planned Capacity Expansion in next 3 Years</div>
        <div className="font-normal text-[10px] text-gray-600">(Percentage of Increase)</div>
      </th>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
        <div>Expected New Sorting Machine Purchases in next 3 Years</div>
      </th>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
        <div>New Product Introduction Planned</div>
        <div className="font-normal text-[10px] text-gray-600">(Fresh produce, nuts, grains or No)</div>
      </th>
      <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>New Facility Construction Planned</div>
        <div className="font-normal text-[10px] text-gray-600">(Yes or No)</div>
      </th>
    </>
  )

  // Future Demand & Expansion Metrics data cells
  const renderFutureExpansionCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.plannedCapacityExpansion}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.expectedNewSortingMachinePurchases}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.newProductIntroductionPlanned}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.newFacilityConstructionPlanned}</td>
    </>
  )

  // CMI Insights header cells (2 columns)
  const renderCMIHeaders = () => (
    <>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Customer Benchmarking Summary</div>
        <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
      </th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Additional Comments/Notes By CMI team</div>
      </th>
    </>
  )

  // CMI Insights data cells
  const renderCMICells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarking}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
    </>
  )

  // Proposition 1 Table - Customer Information (6) + Contact Details (6) = 12 columns
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 2 Table - Customer Info (6) + Contact (6) + Procurement & Purchase Metrics (4) = 16 columns
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={4} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Procurement & Purchase Metrics
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
            {renderProcurementHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
              {renderProcurementCells(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 3 Table - All sections: Customer Info (6) + Contact (6) + Procurement (4) + Digital & Tech (5) + Future Expansion (4) + CMI (2) = 27 columns
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={4} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Procurement & Purchase Metrics
            </th>
            <th colSpan={5} className="bg-[#D8BFD8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Digital & Technology Adoption Metrics
            </th>
            <th colSpan={4} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Future Demand & Expansion Metrics
            </th>
            <th colSpan={2} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
            {renderProcurementHeaders()}
            {renderDigitalTechHeaders()}
            {renderFutureExpansionHeaders()}
            {renderCMIHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
              {renderProcurementCells(customer)}
              {renderDigitalTechCells(customer)}
              {renderFutureExpansionCells(customer)}
              {renderCMICells(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Proposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Proposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Proposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
