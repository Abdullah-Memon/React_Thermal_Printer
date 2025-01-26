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
      center("Company ABC") +
      "\n" +
      center("www.abc.com") +
      "\n\n" +
      pad("Agent:", "abc - City") +
      "\n" +
      pad("Address:", "") +
      "\n" +
      pad("Phone Number:", "+1 (123) 456 7890") +
      "\n\n" +
      pad("Date:", "01/01/2024") +
      "\n" +
      pad("Time:", "12:00 PM") +
      "\n\n" +
      center("SEND MONEY") +
      "\n" +
      center("TRANSACTION CONFIRMATION") +
      "\n" +
      pad("REFERENCE NUMBER:", "000000000") +
      "\n\n" +
      pad("Customer Name:", "Jane Doe") +
      "\n" +
      pad("OM Account Number:", "A12345") +
      "\n\n" +
      pad("Beneficiary Name:", "John Smith") +
      "\n" +
      pad("Beneficiary Address:", "123 Main St, City") +
      "\n" +
      pad("Beneficiary Country:", "Country") +
      "\n" +
      pad("Beneficiary Phone:", "1234567890") +
      "\n\n" +
      pad("Customer Pays:", "100.00 USD") +
      "\n" +
      pad("Our Fees:", "5.00 USD") +
      "\n" +
      pad("We Will Convert:", "95.00 USD") +
      "\n" +
      pad("Our Rate:", "1.0000") +
      "\n" +
      pad("Beneficiary Gets:", "95.00 USD") +
      "\n" +
      pad("Transaction Type:", "Cash Payout") +
      "\n" +
      pad("Reference:", "0000000000000") +
      "\n" +
      pad("Payment Purpose:", "Personal") +
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
  