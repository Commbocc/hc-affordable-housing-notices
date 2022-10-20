interface Notice {
  id: string;
  fields: {
    Name: string;
    Description: string;
    AvailableUntilDate: Date;
    Attachment: Array;
    ContactName: string;
    ContactPhone: string;
    ContactEmail: string;
    SpanishVersion: string;
    SpanishName: string;
    SpanishDescription: string;
    SpanishAttachment: Array;
    ApprovedByPRSWeb?: string;
  };
}
