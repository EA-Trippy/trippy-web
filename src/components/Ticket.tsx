import Image from "next/image";

interface TicketPropType {
  ticket: TicketType;
}

interface TicketType {
  qrcode: string;
  qrnumber: string;
}

const Ticket = (props: TicketPropType) => {
  const {ticket} = props;
  return (
    <div className="w-[600px] h-[190px] flex flex-row">
      <div className="w-[410px] h-full flex items-center justify-center rounded-2xl shadow-md">{ticket.qrcode}</div>
      <div className="w-[190px] h-full flex items-center justify-center rounded-2xl bg-p100">{ticket.qrnumber}</div>
    </div>
  );
};

export default Ticket;
