export const PrintTemplate = (lineWidth = 48) => {
    const center = (text) =>
      text.length >= lineWidth
        ? text.slice(0, lineWidth)
        : text.padStart((lineWidth + text.length) / 2).padEnd(lineWidth);
  
    const pad = (label, value) => {
      const space = lineWidth - label.length - value.length;
      return label + " ".repeat(space > 0 ? space : 0) + value;
    };
  
    return (
      center("Company XYZ") +
      "\n" +
      center("www.xyz.com") +
      "\n\n" +
      pad("Agent:", "xyz - Oakville") +
      "\n" +
      pad("Address:", "") +
      "\n" +
      pad("Phone Number:", "+1 (647) 948 8916") +
      "\n\n" +
      pad("Date:", "16/07/2024") +
      "\n" +
      pad("Time:", "03:45 PM") +
      "\n\n" +
      center("SEND MONEY") +
      "\n" +
      center("TRANSACTION CONFIRMATION") +
      "\n" +
      pad("REFERENCE NUMBER:", "124075099") +
      "\n\n" +
      pad("Customer Name:", "John") +
      "\n" +
      pad("OM Account Number:", "S50495") +
      "\n\n" +
      pad("Beneficiary Name:", "Jordon Syed Test") +
      "\n" +
      pad("Beneficiary Address:", "1243 Main st, Petra") +
      "\n" +
      pad("Beneficiary Country:", "Jordan") +
      "\n" +
      pad("Beneficiary Phone:", "15847859888") +
      "\n\n" +
      pad("Customer Pays:", "500.00 CAD") +
      "\n" +
      pad("Our Fees:", "7.00 CAD") +
      "\n" +
      pad("We Will Convert:", "493.00 CAD") +
      "\n" +
      pad("Our Rate:", "0.5093") +
      "\n" +
      pad("Beneficiary Gets:", "251.08 JOD") +
      "\n" +
      pad("Transaction Type:", "Cash Payout") +
      "\n" +
      pad("Reference:", "2400004534166") +
      "\n" +
      pad("Payment Purpose:", "Business Expenses") +
      "\n\n" +
      center("Thank you for transacting with us!") +
      "\n" +
      center("We hope to see you again soon.") +
      "\n\n" +
      center("Need help?") +
      "\n" +
      center("Email us at support@abc.com") +
      "\n\n" +
      center(
      "By using our services, you agree to our terms and conditions and the operator's terms."
      ) +
      "\n" +
      center("www.abc.com/agent/terms") +
      "\n\n" +
      center("**** This is a system generated document ****") +
      "\n\n\n\n"
    );
  };
  