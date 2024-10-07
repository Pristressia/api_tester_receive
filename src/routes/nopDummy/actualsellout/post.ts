import { Request, Response } from "express";
import Log from "./log";

interface ItemList {
  product_rowid: number;
  promotion_rowid?: number;
  outlet_rowid?: number;
  volumn?: string | number;
  invoice_no?: string;
  invoice_date: string;
  suggest_price_nop: number;
  amount: number;
}

interface ActualSelloutInput {
  rowid?: string;
  document_code?: string;
  customer_type?: string;
  customer_rowid?: number;
  customer_code?: string;
  purchase_from_rowid?: number;
  purchase_from_code?: string;
  total_amount?: string;
  file_attach_1?: string;
  file_attach_2?: string;
  file_attach_3?: string;
  remark?: string;
  active_status?: string;
  user_id?: number;
  user_code?: string;
  user_ip?: string;
  item_list?: ItemList[];
}

function POST(req: Request, res: Response) {
  const {
    rowid,
    document_code,
    customer_type,
    customer_rowid,
    customer_code,
    purchase_from_rowid,
    purchase_from_code,
    total_amount,
    file_attach_1,
    file_attach_2,
    file_attach_3,
    remark,
    active_status,
    user_id,
    user_code,
    user_ip,
    item_list,
  }: ActualSelloutInput = req.body;

  Log(`data Received : =-->>`);
  Log(`rowid: ${rowid}`);
  Log(`document_code: ${document_code}`);
  Log(`customer_type: ${customer_type}`);
  Log(`customer_code: ${customer_code}`);
  Log(`purchase_from_rowid: ${purchase_from_rowid}`);
  Log(`purchase_from_code: ${purchase_from_code}`);
  Log(`total_amount: ${total_amount}`);
  Log(`file_attach: ${file_attach_1} ${file_attach_2} ${file_attach_3}`);
  Log(`remark: ${remark}`);
  Log(`active_status: ${active_status}`);
}

export default POST;
